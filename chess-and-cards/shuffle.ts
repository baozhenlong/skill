// 洗牌算法

// 标准洗牌算法
function standardShuffle<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        let index: number = Math.floor(Math.random() * arr.length);
        let temp: T = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
}

// 网狐洗牌算法
function foxucShuffle<T>(arr: T[]): void {
    arr.sort((a: T, b: T) => {
        return Math.random() > 0.5 ? -1 : 1;
    });
}