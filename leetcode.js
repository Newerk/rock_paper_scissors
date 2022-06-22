/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function (heights, bricks, ladders) {
    let furthestBuilding = 0;

    for (let i = 0; i < heights.length; i++) {
        if (bricks == 0 && ladders == 0 &&(i == heights.length-1 || heights[i] < heights[i + 1])) {
            return furthestBuilding;

        } else if (heights[i] >= heights[i + 1]) {
            continue;

        } else if (ladders != 0 && heights[i] < heights[i + 1]) {
            ladders--;
            furthestBuilding++;

        }

        else if (bricks != 0 && heights[i] < heights[i + 1]) {
            bricks = (heights[i + 1] - heights[i]);
            furthestBuilding++;

        } else {
            furthestBuilding++;
        }
    }
    return furthestBuilding;
};


console.log(furthestBuilding([14,3,19,3],3, 0)); //output should be 3