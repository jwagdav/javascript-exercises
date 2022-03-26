const findTheOldest = function(array) {
    return array.reduce((a, b) => {
        const oldestAge = calculateAge(a.yearOfBirth, a.yearOfDeath);
        const curAge = calculateAge(b.yearOfBirth, b.yearOfDeath);
        return oldestAge > curAge ? a : b;
    }) 
};


function calculateAge(birth, death) {
    if(!death){
        death = new Date().getFullYear();
    } 

    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
