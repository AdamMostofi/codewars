function feast(beast, dish) {

    let beastLastChar = beast.at(-1)
    let dishLastChar = dish.at(-1)

    let beastFirstChar = beast.at(0)
    let dishFirstChar = dish.at(0)

    if (beastLastChar === dishLastChar && beastFirstChar === dishFirstChar) {
        return true;
    } else {
        return false;
    }
}