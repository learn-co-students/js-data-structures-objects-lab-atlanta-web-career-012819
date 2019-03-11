// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
    console.log(key, value)
    let obj = Object.assign({}, driver, {[key]: value})
    console.log(obj);
    return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    console.log(driver,key,value)
    driver[key] = value
    return driver;
}

function deleteFromDriverByKey(driver,key) {
    let obj = Object.assign({}, driver)
    delete obj[key]
    return obj;
    
}

function destructivelyDeleteFromDriverByKey(driver,key) {
    delete driver[key]
    return driver;
}