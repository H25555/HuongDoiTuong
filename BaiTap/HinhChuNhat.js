class Rectangle {
    width;
    height;
    constructor() {
        this.width = width
        this.height = height
    }
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }
    setWidth(width) {
        this.width = width
    }
    setHeight(height) {
        this.height = height
    }
    getArea(width, height) {
        return this.width * this.height
    }
    getPremeter(width, height) {
        return (this.width + this.height) * 2
    }
}