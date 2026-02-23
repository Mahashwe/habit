import { createContext, useState, useContext } from "react";

type Habit = {
  id: number;
  habitName: string;
  habitDescription: string;
  frequency: number;
};

const HabitsContext = createContext<{
  habits: Habit[];
  addHabit: (habit: Habit) => void;
} | null>(null);

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(newHabit: Habit) {
    setHabits((prev) => [...prev, newHabit]);
  }

  return (
    <HabitsContext.Provider value={{ habits, addHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error("useHabits must be used inside HabitsProvider");
  }
  return context;
};
