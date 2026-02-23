import { createContext, useState, useContext } from "react";

type Habit = {
  id: number;
  habitName: string;
  habitDescription: string;
  frequency: number;
};

const HabitsContext = createContext({
  habits: [] as Habit[],
  addHabit: (_newHabit: Habit) => {},
});

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (newHabit: Habit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
