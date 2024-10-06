import { v4 as Id } from 'uuid';

let goals = [
    {
        id: Id(),
        description: 'learn JS',
        deadline: '01-01-2025',
        completed: false,
        priority: 'high',
        category: 'learning'
    },
    {
        id: Id(),
        description: 'start a fitness routine',
        deadline: '11-30-2024',
        completed: false,
        priority: 'medium',
        category: 'health'
    },
    {
        id: Id(),
        description: 'read 10 books',
        deadline: '12-31-2024',
        completed: false,
        priority: 'low',
        category: 'personal development'
    },
    {
        id: Id(),
        description: 'learn a new language',
        deadline: '06-01-2026',
        completed: false,
        priority: 'medium',
        category: 'learning'
    }
];

class Goal {
    static getAll() {
        return goals;
    }

    static getGoalById(id) {
        return goals.find((goal) => goal.id === id);
    }

    static add(goal) {
        const newGoal = { id: Id(), ...goal };
        goals.unshift(newGoal);
        return newGoal;
    }

    static update(id, goal) {
        const goalExist = goals.find((goal) => goal.id === id);
        if (goalExist) {
            goalExist.description = goal.description;
            goalExist.deadline = goal.deadline;
            goalExist.completed = goal.completed;
            goalExist.priority = goal.priority;
            goalExist.category = goal.category;

            return goalExist;
        } else {
            return null;
        }
    }

    static remove(id) {
        const goalExist = goals.find((goal) => goal.id === id);
        if (goalExist) {
            goals = goals.filter((goal) => goal.id !== id);
            return true;
        } else {
            return false;
        }
    }
}

export default Goal;
