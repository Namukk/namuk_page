import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AppRouter from "./components/Router";

// function App() {
//   return (
//     <div className="App">
//       <AppRouter />
//       <GlobalStyles />
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
};

export default App;
