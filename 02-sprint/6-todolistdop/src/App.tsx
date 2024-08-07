import React, {useState} from 'react';
import './App.css';
import { Todolist} from './Todolist';
import {v1} from 'uuid';

type ObjectType = {
    todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {
    // let todolistId1 = v1();
    // let todolistId2 = v1();
    //
    // let [todolists, setTodolists] = useState<Array<TodolistType>>([
    //     {id: todolistId1, title: "What to learn", filter: "all"},
    //     {id: todolistId2, title: "What to buy", filter: "all"}
    // ])
    //
    // let [tasks, setTasks] = useState<TasksStateType>({
    //     [todolistId1]: [
    //         {id: v1(), title: "HTML&CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: true}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "Milk", isDone: true},
    //         {id: v1(), title: "React Book", isDone: true}
    //     ]
    // });

  // const todoFromServer=[
  //     {
  //         todolistId:v1(),
  //         title: "What to learn",
  //         filter: "all",
  //         tasks: [
  //             {taskId: v1(), title: "HTML&CSS", isDone: true},
  //             {taskId: v1(), title: "JS", isDone: true}
  //         ],
  //         students: [
  //             'Rick Kane',
  //             'Finnlay Bentley',
  //             'Samia North',
  //             'Isaac Morton',
  //             'Lily-Ann Clifford',
  //             'Thalia Park',
  //             'Sapphire Cruz',
  //             'Cieran Vazquez',
  //             'Anya Estes',
  //             'Dominika Field',
  //             'Rosanna Chung',
  //             'Safiyah Davey',
  //             'Ryley Beasley',
  //             'Kalvin Trejo',
  //             'Evie-Mae Farrell',
  //             'Juliet Valencia',
  //             'Astrid Austin',
  //             'Lyle Montgomery',
  //             'Nisha Mora',
  //             'Kylie Callaghan',
  //             'Star Wilks',
  //             'Marissa Colley',
  //             'Asa Fuller',
  //             'Leigh Kemp',
  //             'Avleen Dawson',
  //             'Sammy Bonilla',
  //             'Acacia Becker',
  //             'Coral Shepherd',
  //             'Melina Molina',
  //             'Kiran Bailey',
  //             'Clara Escobar',
  //             'Alexandru Horn',
  //             'Brandon-Lee Mercado',
  //             'Elouise Weston',
  //             'King Long',
  //             'Kerri Searle',
  //             'Kanye Hamer',
  //             'Elwood Benitez',
  //             'Mikail Whitaker',
  //             'Bobby Hardy',
  //             'Talha Ferry',
  //             'Priscilla Landry',
  //             'Olivia-Grace Cain',
  //             'Kiaan Wallace',
  //             'Wesley Padilla90',
  //             'Ella-Grace Wooten91',
  //             'Kaif Molloy92',
  //             'Kamal Broadhurst93',
  //             'Bianca Ferrell94',
  //             'Micheal Talbot95',
  //         ]
  //     },
  //     {
  //         todolistId:v1(),
  //         title: "What to do",
  //         filter: "all",
  //         tasks: [
  //             {taskId: v1(), title: "HTML&CSS2", isDone: true},
  //             {taskId: v1(), title: "JS2", isDone: true}
  //         ],
  //         students: [
  //             'Jago Wormald1',
  //             'Saul Milne2',
  //             'Aariz Hester3',
  //             'Dion Reeve4',
  //             'Anisa Ortega5',
  //             'Blade Cisneros6',
  //             'Malaikah Phelps7',
  //             'Zeeshan Gallagher8',
  //             'Isobella Vo9',
  //             'Rizwan Mathis10',
  //             'Menaal Leach11',
  //             'Kian Walton12',
  //             'Orion Lamb13',
  //             'Faizah Huynh14',
  //             'Crystal Vaughan15',
  //             'Vivien Hickman16',
  //             'Stuart Lu17',
  //             'Karol Davison18',
  //             'Dario Burns19',
  //             'Chloe Rich20',
  //             'Martyna Felix',
  //             'Nida Glass',
  //             'Maeve Miles',
  //             'Hasnain Puckett',
  //             'Ayman Cano',
  //             'Safwan Perry',
  //             'Fox Kelly',
  //             'Louise Barlow',
  //             'Malaki Mcgill',
  //             'Leanna Cline',
  //             'Willard Hodge',
  //             'Amelia Dorsey',
  //             'Kiah Porter',
  //             'Jeanne Daly',
  //             'Mohsin Armstrong',
  //             'Laurie Rangel',
  //             'Princess Tierney',
  //             'Kasim Kendall',
  //             'Darryl Cope',
  //             'Elysha Ray',
  //             'Liyana Harris',
  //             'Kashif Blackburn',
  //             'Atif Zimmerman',
  //             'Sila Hartley',
  //             'Ralphie Hebert',
  //         ]
  //     }
  // ]

    const [todoFromServer, setTodoFromServer] = useState<ObjectType[]>([
        {
            todolistId:v1(),
            title: "What to learn",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "JS", isDone: true}
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
                'Lily-Ann Clifford',
                'Thalia Park',
                'Sapphire Cruz',
                'Cieran Vazquez',
                'Anya Estes',
                'Dominika Field',
                'Rosanna Chung',
                'Safiyah Davey',
                'Ryley Beasley',
                'Kalvin Trejo',
                'Evie-Mae Farrell',
                'Juliet Valencia',
                'Astrid Austin',
                'Lyle Montgomery',
                'Nisha Mora',
                'Kylie Callaghan',
                'Star Wilks',
                'Marissa Colley',
                'Asa Fuller',
                'Leigh Kemp',
                'Avleen Dawson',
                'Sammy Bonilla',
                'Acacia Becker',
                'Coral Shepherd',
                'Melina Molina',
                'Kiran Bailey',
                'Clara Escobar',
                'Alexandru Horn',
                'Brandon-Lee Mercado',
                'Elouise Weston',
                'King Long',
                'Kerri Searle',
                'Kanye Hamer',
                'Elwood Benitez',
                'Mikail Whitaker',
                'Bobby Hardy',
                'Talha Ferry',
                'Priscilla Landry',
                'Olivia-Grace Cain',
                'Kiaan Wallace',
                'Wesley Padilla90',
                'Ella-Grace Wooten91',
                'Kaif Molloy92',
                'Kamal Broadhurst93',
                'Bianca Ferrell94',
                'Micheal Talbot95',
            ]
        },
        {
                todolistId:v1(),
                title: "What to do",
                filter: "all",
                tasks: [
                    {taskId: v1(), title: "HTML&CSS2", isDone: true},
                    {taskId: v1(), title: "JS2", isDone: true}
                ],
                students: [
                    'Jago Wormald1',
                    'Saul Milne2',
                    'Aariz Hester3',
                    'Dion Reeve4',
                    'Anisa Ortega5',
                    'Blade Cisneros6',
                    'Malaikah Phelps7',
                    'Zeeshan Gallagher8',
                    'Isobella Vo9',
                    'Rizwan Mathis10',
                    'Menaal Leach11',
                    'Kian Walton12',
                    'Orion Lamb13',
                    'Faizah Huynh14',
                    'Crystal Vaughan15',
                    'Vivien Hickman16',
                    'Stuart Lu17',
                    'Karol Davison18',
                    'Dario Burns19',
                    'Chloe Rich20',
                    'Martyna Felix',
                    'Nida Glass',
                    'Maeve Miles',
                    'Hasnain Puckett',
                    'Ayman Cano',
                    'Safwan Perry',
                    'Fox Kelly',
                    'Louise Barlow',
                    'Malaki Mcgill',
                    'Leanna Cline',
                    'Willard Hodge',
                    'Amelia Dorsey',
                    'Kiah Porter',
                    'Jeanne Daly',
                    'Mohsin Armstrong',
                    'Laurie Rangel',
                    'Princess Tierney',
                    'Kasim Kendall',
                    'Darryl Cope',
                    'Elysha Ray',
                    'Liyana Harris',
                    'Kashif Blackburn',
                    'Atif Zimmerman',
                    'Sila Hartley',
                    'Ralphie Hebert',
                ]
            }
    ])



    function removeTask(id: string, todolistId: string) {
        setTodoFromServer(todoFromServer.map(el => el.todolistId === todolistId
        ?{...el, tasks: el.tasks.filter(t=> t.taskId!==id)}
            : el
        ))

    }

    function addTask(title: string, todolistId: string) {
         let newTask = {taskId: v1(), title: "HTML&CSS", isDone: true};
         setTodoFromServer((prevState) => prevState.map(el => el.todolistId === todolistId
         ? {...el,tasks:[newTask,...el.tasks]}
         : el))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        setTodoFromServer((prevState)=> prevState.map(el=> el.todolistId === todolistId
            ? {...el, tasks: el.tasks.map(t => t.taskId === id ? {...t, isDone}:t)}
            :el
        ))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodoFromServer((prevState)=> prevState.map(el=> el.todolistId === todolistId
        ? {...el, filter: value}
            :el
        ))
        // let todolist = todolists.find(tl => tl.id === todolistId);
        // if (todolist) {
        //     todolist.filter = value;
        //     setTodolists([...todolists])
        // }
    }

    function removeTodolist(id: string) {
        setTodoFromServer((prevState)=> (prevState.filter(el => el.todolistId !== id)))

    }

    return (
        <div className="App">
            {
                todoFromServer.map(tl => {
                    let allTodolistTasks = tl.tasks;
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.todolistId}
                        id={tl.todolistId}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default App;
