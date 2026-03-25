function tripleTrouble(one, two, three) {

    let result = "";
    for (let i = 0; i < one.length; i++) {

        result += one.at(i) + two.at(i) + three.at(i)
    }

    return result;

}