import { IViewer, Point } from "./types"


export class Square{
    private _viewer?: IViewer

    public get viewer() {
        return this._viewer
    }

    public set viewer(val) {
        this._viewer = val;
    }

    public get point() {
        return this._point
    }
 
    public set point(val:Point) {
        this._point = val
        // 完成显示
        if(this._viewer){
            this._viewer.show()
        }
    }

    public get color() {
        return this._color
    }

    public constructor(
        private _point:Point, 
        private _color:string
    ){}
}