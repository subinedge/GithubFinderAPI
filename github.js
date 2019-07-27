class Github {
  constructor() {
   eval(function (p, a, c, k, e, d) { e = function (c) { return c.toString(36) }; if (!''.replace(/^/, String)) { while (c--) { d[c.toString(a)] = k[c] || c.toString(a) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('q 8=["\\b\\j\\g\\a\\l\\f\\m\\g\\4","\\4\\4\\5\\4\\7\\7\\p\\6\\4\\9\\i\\r\\h\\5\\7\\i\\5\\a\\6\\h","\\b\\j\\g\\a\\l\\f\\m\\t\\a\\b\\s\\a\\f","\\n\\d\\d\\k\\9\\7\\5\\i\\6\\d\\p\\6\\4\\9\\7\\c\\5\\5\\7\\e\\h\\4\\k\\d\\c\\9\\n\\c\\b\\5\\6\\c\\6\\4\\4\\e\\9\\5\\e\\e"];o[8[0]]=8[1];o[8[2]]=8[3]', 30, 30, '||||x64|x35|x38|x31|_0x92f5|x37|x65|x63|x32|x30|x39|x74|x69|x62|x34|x6C|x33|x6E|x5F|x36|this|x61|var|x66|x72|x73'.split('|'), 0, {}))
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page= ${this.repos_count}&sort=${this.repos_sort}&client_id = ${this.client_id}&client_secret = ${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }

  }
}

