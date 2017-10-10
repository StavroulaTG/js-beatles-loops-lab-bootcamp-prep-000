function theBeatlesPlay(musicians, instruments) {
  const  arr = []

    for (arr i=0; i < musicians.length; i++) {
        arr.push(musicians[i] + " plays " + instruments[i])
    }
    return arr
}
