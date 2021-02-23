import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery"

const sq = new Square({x:0,y:0}, "red");

sq.viewer = new SquarePageViewer(sq, $("#root"))

sq.point = {
    x: 3,
    y: 0
}

// setInterval(() => {
//     sq.point = {
//         x: sq.point.x,
//         y: sq.point.y + 1
//     }
// }, 1000)