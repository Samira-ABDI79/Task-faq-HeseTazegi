
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import {Home } from "./Pages"


function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
<Route path='/' element={<Home />} />
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;