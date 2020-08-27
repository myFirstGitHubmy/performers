function getValueMapByKey(map, ke){
    return map.get(ke)
}

function getArrayValuesMap(map){
    let array = []
    for(let [key] of map){
        array.push(map.get(key))
    }
    return array
}

function getSizeMap(map){
    return map.size
}

function printMap(map){
    for(let [key,value] of map){
        console.log("key: " + key + ",value: "+ value)
    }
}