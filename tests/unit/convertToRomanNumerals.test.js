const service = require('../../services/convertToRomanNumerals')

describe('[unit] convertToRomanNumerals service test', () => {
  test('Should convert zero', async () => {
    expect(service.convertToRomanNumerals({ number: 0 })).toEqual('')
  })
  test('Should convert the numbers', async () => {
    expect(service.convertToRomanNumerals({ number: 9 })).toEqual('IX')
    expect(service.convertToRomanNumerals({ number: 99 })).toEqual('XCIX')
  })
})
