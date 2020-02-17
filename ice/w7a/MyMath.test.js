import { Sum, AddList } from './MyMath.js'


describe("Sum",  () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })

  test('test undefined on invalid type', () => {
    expect(Sum(1, "Test")).toBeUndefined()
  })
  
  it('produces the sum of 10 and 20, should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })
})

describe("AddList",  () => {
  test('adds list of numbers together', () => {
    let numElem = 1000;
    let input = [];
    let result = 0;
    var elem = 0;
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < numElem; i++) {
        elem = Math.random()*1000;
        result += elem;
        input.push(elem)
        
      }
      expect(AddList(input)).toBe(result);
    }
  })

  test('tests if empty', () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
  })

  test('tests if undefined', () => {
    let input = [undefined,0,3,5];
    expect(AddList(input)).toBeUndefined();
  })

  test('tests non array', () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  })
})


// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
