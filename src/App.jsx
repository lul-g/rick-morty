import { useEffect, useState } from "react";
import RM from "./RM";
import "./App.css";

function App() {
  const [styles, setStyles] = useState([
    {
      transform: "translate(-10px, 5px)",
    },
    {
      transform: "translate(-10px, 5px)",
    },
  ]);

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg;
  }
  useEffect(() => {
    let rect = document.getElementById("right-r").getBoundingClientRect();
    onmousemove = (event) => {
      let ang = angle(
        event.clientX,
        event.clientY,
        rect.left / 2,
        rect.top / 2
      );

      setStyles(() => {
        return [
          {
            transform: `translate(${
              event.clientX > 683
                ? event.clientX * (10 / 1366)
                : -(683 - event.clientX) * (30 / 1366)
            }px, ${
              event.clientY > 625 / 2
                ? event.clientY * (5 / 625)
                : -(200 - event.clientY) * (5 / 625)
            }px)`,
          },
          {
            transform: `translate(${
              event.clientX > 683
                ? event.clientX * (8 / 1366)
                : -(683 - event.clientX) * (40 / 1366)
            }px, ${
              event.clientY > 625 / 2
                ? event.clientY * (8 / 625)
                : -(625 / 2 - event.clientY) * (30 / 625)
            }px)`,
          },
        ];
      });
    };
  }, [styles]);

  return (
    <div className='App'>
      <div className='img'>
        <RM style={styles} />
      </div>
    </div>
  );
}

export default App;
