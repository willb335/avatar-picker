describe("The selected avatar moves to front of array", () => {
  const list = [0, 1, 2, 3, 4, 5];
  it("moves to front of array when an index of 1(first selectable index)", () => {
    list.unshift(list.splice(1, 1)[0]);
    expect(list).toEqual([1, 0, 2, 3, 4, 5]);
  });

  it("moves to front of array when an index of 5(last selectable index)", () => {
    list.unshift(list.splice(5, 1)[0]);
    expect(list).toEqual([5, 1, 0, 2, 3, 4]);
  });

  it("moves to front of array when a middle index", () => {
    list.unshift(list.splice(3, 1)[0]);
    expect(list).toEqual([2, 5, 1, 0, 3, 4]);
  });
});
