import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'Значення 1',
                'Значення 2',
                'Значення 3',
                'Значення 4',
                'Значення 5'
            ]
        };

        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(event) {
        event.currentTarget.style.textDecoration = 'underline';
    }

    render() {
        let info = (<h1>1</h1>);
        let list = this.state.arr.map(item =>
                <li key={ Math.random() }>
                    <label onClick={ this.changeStyle }>
                        <input type="checkbox"/>
                        { item }
                    </label>
                </li>
            );

        return(
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task2 extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        users: [
            {lastName: 'Хаварівська', firstname: 'Надія', salary: 18000, totalSalary: true},
            {lastName: 'Медведенко', firstname: 'Юліанна', salary: 21000, totalSalary: true},
            {lastName: 'Скрипка', firstname: 'Руслан', salary: 19500, totalSalary: true},
        ]
    };
}

    render() {
        let info = (<h1>2</h1>);
        let table = '';

        table = this.state.users.map((item, index) => {
            return (<tr key={index}>
                <td>{item.lastName}</td>
                <td>{item.firstname}</td>
                <td>{item.salary}</td>
                <td><label>
                        <input type="checkbox" defaultChecked/>
                    </label></td>
            </tr>)
        });

        let sumSalary = 0;
        this.state.users.map((item, index) => {sumSalary += item.salary});

        return (
            <div>
                { info }
                <table>
                    { table }
                </table>
                <p>{ sumSalary }</p>
            </div>
        );
    }
}

class Task3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'Значення 1',
                'Значення 2',
                'Значення 3',
                'Значення 4',
                'Значення 5'
            ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (!event.target.checked)
            document.getElementById(event.target.name).style.display = 'none';
        else
            document.getElementById(event.target.name).style.display = 'block';
    }

    render() {
        let info = (<h1>3</h1>);
        let result = this.state.arr.map(item =>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name={ item }
                        onClick={ this.handleClick }
                        defaultChecked
                    />
                    { item }
                </label>
                <p id={ item }>
                    { item }
                </p>
            </div>
        );
        return(
            <div>
                { info }
                { result }
            </div>
        );
    }
}

class Task4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { name: "Микола", surname: "Шевченко", age: 30 },
                { name: "Василь", surname: "Чумак", age: 40 },
                { name: "Петро", surname: "Стеценко", age: 50 }
            ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let fullName = '';
        this.state.users.forEach(user => {
            if(event.target.name === user.name + ' ' + user.surname)
                fullName = user.name + ' ' + user.surname + ' ' + user.age;
        });

        if (event.target.checked)
            document.getElementById(event.target.name).textContent = fullName;
        else
            document.getElementById(event.target.name).textContent = fullName.split(' ')[0];
    }

    render() {
        let info = (<h1>4</h1>);
        let list = this.state.users.map(user => 
                <li key={ Math.random() }>
                    <input
                        type="checkbox"
                        name={ user.name + ' ' + user.surname }
                        onClick={ this.handleClick }
                    />
                    <span id={ user.name + ' ' + user.surname }>
                        { user.name }
                    </span>
                </li>
            );

        return(
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

function Task5() {
    const [items, setItems] = useState([
        { id: 1, value: 'Значення 1'},
        { id: 2, value: 'Значення 2'},
        { id: 3, value: 'Значення 3'},
        { id: 4, value: 'Значення 4'},
        { id: 5, value: 'Значення 5'},
    ]);

    const handleEdit = (id, target) => {
        const updateItems = items.map(item => {
            const newItem = {
                id: id, 
                value: (target.value === '' ? item.value : target.value)
            };

            if (item.id === id) return { ...item, ...newItem };
            else return item;
        });
        
        setItems(updateItems);

        target.style.display = "none";
        target.value = '';
    };

    const showInput = (target) => {
        target.style.display = "inline";
        target.focus();
    }

    let list = items.map(item => (
        <li
            key={ item.id }
            onClick={ () => showInput(document.getElementById(item.id)) }
            style={{ margin: "5px 0px" }}
        >
            <span style={{ marginRight: "10px" }} >{ item.value }</span>
            <input 
                type="text"
                id={ item.id }
                style={{ display: "none" }}
                onBlur={ (event) => handleEdit(item.id, event.target) }
            />
        </li>
    ));

    let info = (<h1>5</h1>)
    return(
        <div>
            { info }
            <ul>
                { list }
            </ul>
        </div>
    );
}

function Task7(props) {
    const [routes] = useState([
        { id: 1, name: "Маршрут 1" },
        { id: 2, name: "Маршрут 2" },
        { id: 3, name: "Маршрут 3" },
        { id: 4, name: "Маршрут 4" },
        { id: 5, name: "Маршрут 5" },
        { id: 5, name: "Маршрут 6" },
        { id: 5, name: "Маршрут 7" },
        { id: 5, name: "Маршрут 8" },
    ]);

    const handleClick = (target) => setRoute(target.value);

    const [route, setRoute] = useState(props?.value ?? '');
    const list = routes.map(route => 
            <li key={ route.id } >
                <label>
                    <span>{ route.name }</span>
                    <input
                        type="radio"
                        name="route"
                        value={ route.name }
                        onClick={ (event) => handleClick(event.target) }
                    />
                </label>
            </li>
        );

        let info = (<h1>6</h1>);
    return(
        <div>
            { info }
            <ul>
                { list }
            </ul>
            <p>Ваш маршрут: { route }</p>
        </div>
    );
}

function Task9(props) {
    const [employees] = useState(
        [
            { id: 1, lastName: 'Хаварівська', firstName: 'Надія', salary: 18000},
            { id: 2, lastName: 'Медведенко', firstName: 'Юліанна', salary: 21000},
            { id: 3, lastName: 'Скрипка', firstName: 'Руслан', salary: 19500},
        ]
    ); 


    const sortByFirstName = () => {

        setTable(employees
            .sort(( a, b ) => {
                if (a.firstName < b.firstName) return -1;
                else if (a.firstName > b.firstName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortByLastName = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.lastName < b.lastName) return -1;
                else if (a.lastName > b.lastName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortBySalary = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.salary < b.salary) return 1;
                else if (a.salary > b.salary) return -1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }

    const [table, setTable] = useState(employees.map(employee => 
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.salary }</td>
            </tr>
        ));

        let info = (<h1>7</h1>);
    return(
        <div>
            { info }
            <table border="1">
                <tr>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByFirstName() } 
                    >Ім'я</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByLastName() }
                    >Прізвище</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortBySalary() }
                    >Зарплата</th>
                </tr>
                {table}
            </table>
        </div>
    );
}

function Task10(props) {
    const ua_week = [
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'П`ятниця',
        'Субота',
        'Неділя',
    ]
    const en_week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]

    const changeSelect = (target) => {
        if(target.value === "Ukraine")
            setTwoSelect(ua_week.map(day =>
                    <option value={ day }>{ day }</option>
                ));
        else if(target.value === "English")
            setTwoSelect(en_week.map(day =>
                    <option value={ day }>{ day }</option>
                ));
    }

    const [twoSelect, setTwoSelect] = useState(props?.value ?? '');

    let info = (<h1>8</h1>);
    return(
        <div>
            { info }
            <select
                id="selectID_1"
                style={{ margin: "5px" }}
                onChange={ (event) => changeSelect(event.target) }
            >
                <option selected disabled>Виберіть мову</option>
                <option value="Ukraine" >Українська</option>
                <option value="English" >English</option>
            </select>
            <select
                id="selectID_2"
                style={{margin: "5px" }}
            >
                <option selected disabled>Виберіть день тижня</option>
                { twoSelect }
            </select>
        </div>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task7 />
            <Task9 />
            <Task10 />
        </div>
    );