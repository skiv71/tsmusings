import { assert } from 'chai'

import math from '../src/lib/math'

describe('math library', () => {

    describe('math.add', () => {
        it('should add 2 numbers together', () => {
            assert(math.add(2, 3) === 5, '2 + 3 should equal 5!')
        })
    })

    describe('math.subtract', () => {
        it('should subtract one number from another', () => {
            assert(math.subtract(10, 3) === 7, '10 - 3 should equal 7!')
        })
    })

    describe('math.multiply', () => {
        it('should multiply 2 numbers together', () => {
            assert(math.multiply(10, 5) === 50, '10 * 5 should equal 50!')
        })
    })

    describe('math.divide', () => {
        it('should first number by last number', () => {
            assert(math.divide(9, 3) === 3, '9 / 3 should equal 3!')
        })
    })

})
