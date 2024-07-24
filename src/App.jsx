import { useState } from 'react';

const App = () => {
	const [todos] = useState([{ id: Date.now(), text: 'Test', completed: false }, { id: Date.now(), text: 'Wrzuć je do GLE', completed: false }]);

	return (
		<div>
			<h1 className='app__title'>Todo List</h1>
			<main className='container'>
				<div className='list__input-container'>
					<input className='list__input' type='text' />
					<button>Dodaj zadanie</button>
				</div>
				<ul className='list'>
					{todos?.map(todo => (
						<li className='list__item' key={todo.id}>
							<span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
							<div className='list__item-buttons'>
								<button>Ukończone</button>
								<button>Usuń</button>
							</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default App;
