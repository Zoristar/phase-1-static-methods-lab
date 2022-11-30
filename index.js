class Formatter {
  //add static methods here
  static capitalize(string){
    return `${string[0].toUpperCase()}${string.slice(1)}`
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    const someString = string.split(' ')
    let results = []
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const word of someString) {
      results.push(except.includes(word) ? word : capital(word))
    }
    
    return capital(results.join(" "))
  }
}

function capital (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
