import "./App.css";

function App() {
	return (
		<div>
			<div
				style={{
					border: "solid 1px black",
					maxWidth: "100vw",
					textAlign: "center",
				}}
			>
				<h1 className="title red">My name is Maroua AYED</h1>

				<br />

				<img src="/man-hands.jpg" style={{ maxWidth: "50%" }} />

				<br />

				<img src="/man-hands.jpg" style={{ maxWidth: "50%" }} />

				<br />

				<video width="320" height="240" controls>
					<source src="raspberry_pi.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}

export default App;
