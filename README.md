# expand-keys

```
describe('expandKeys', () => {
  it('expands keys', () => {
    let expected = {
      hello: {
        world: 1,
        galaxy: 2
      }
    }
    let expanded = expandKeys({
      'hello.world': 1,
      'hello.galaxy': 2
    })
    expect(expanded).toEqual(expected)
  })
})
```