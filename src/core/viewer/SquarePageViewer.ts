import { Square } from "../Square";
import $ from "jquery"
import { IViewer } from "../types";
import PageConfig from "./PageConfig";

export class SquarePageViewer implements IViewer{
    private dom?: JQuery<HTMLElement>

    show(): void {
        if(!this.dom) {
            this.dom = $("<div>").css({
                position: "absolute",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                width: PageConfig.SquareSzie.width,
                height: PageConfig.SquareSzie.height,
            }).appendTo(this.container)
        }
        this.dom.css({
            left: this.square.point.x * PageConfig.SquareSzie.width,
            top:  this.square.point.y * PageConfig.SquareSzie.height,
            background: this.square.color
        })
    }
    remove(): void {

    }

    constructor(
        private square: Square,
        private container: JQuery<HTMLElement>
    ){}
}