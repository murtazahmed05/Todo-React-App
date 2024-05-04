"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
	const [title, settitle] = useState("");
	const [mainTask, setmainTask] = useState([]);
	const [error, seterror] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (title.trim() !== "") {
			setmainTask([...mainTask, { title }]);
			settitle("");
			seterror("");
		} else {
			seterror("Please Enter Something!");
		}
	};

	const deleteHandler = (i) => {
		let copyTask = [...mainTask];
		copyTask.splice(i, 1);
		setmainTask(copyTask);
	};

	let renderTask = <h1 className="text-center">No Task Available</h1>;

	if (mainTask.length > 0) {
		renderTask = mainTask.map((t, i) => {
			return (
				<div key={i} className="d-flex justify-content-between mb-4">
					<h2>{t.title}</h2>
					<button
						onClick={() => {
							deleteHandler();
						}}
						className="btn btn-outline-danger"
					>
						X
					</button>
				</div>
			);
		});
	}
	return (
		<>
			<h1 className="p-4 text-bg-primary text-center">ToDoList</h1>
			<form className="d-flex align-items-center justify-content-center" onSubmit={submitHandler}>
				<input
					className="px-4 py-2 my-5 border rounded-1"
					placeholder="Enter Your Task"
					value={title}
					onChange={(e) => {
						settitle(e.target.value);
					}}
				/>
				<button className="btn btn-outline-primary ">Add</button>
			</form>
			{error && <p className="text-danger text-center">{error}</p>}
			<div className="p-4 bg-primary-subtle">
				<ul>{renderTask}</ul>
			</div>
		</>
	);
};

export default page;
