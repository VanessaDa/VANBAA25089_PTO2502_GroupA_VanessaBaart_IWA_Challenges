const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let currency = null
let shipping = null
let location = 'RSA'
let customers = '1'



const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 

if (location = RSA) { shipping === 400 && currency === 'R' }

if (location == 'RSA') {
shipping = 400 
currency = 'R'
}
else 
{
	currency = '$'
	shipping = location == 'NAM' ? 600 : 800
}

const isFreeLocal = currency === 'R' && total >= 1000
const isFreeInt = currency === '$' && total >= 60
const isFree = isFreeLocal || isFreeInt //if this is true

const IS_FREE_WARNING = isFree && customers !== 1 //if this is FALSE

const totalWithShipping = total + shipping
const isBanned = location === 'NK'
let isChecked = ''
if (IS_FREE_WARNING) console.log(FREE_WARNING)

if (isFree && !IS_FREE_WARNING) shipping = 0

console.log(isBanned ? BANNED_WARNING : 'Price: ' + currency + totalWithShipping)


