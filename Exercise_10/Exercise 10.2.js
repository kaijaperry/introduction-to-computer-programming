// const r2 = require('r2');

async function runProgram () {
  const listURL = "https://patrickmcneill.com/itp/urls.txt";
  let list = await r2(listURL).text;
  list = list.split("\n").slice(0, -1);
  console.log(list);

  let results = await Promise.all(list.map(url => fetch(url)));
  // console.log(results);

  const resultPromises = results.map(x => x.text());

  let leastHTMLurl = null;
  let mostHTMLurl = null;
  let leastHTMLamount = Number.MAX_VALUE;
  let mostHTMLamount = 0;

  for (let i = 0; i < resultPromises.length; ++i) {
    const htmlResult = await resultPromises[i];

    if (htmlResult.length < leastHTMLamount) {
      leastHTMLurl = list[i];
      leastHTMLamount = htmlResult.length;
    }
    if (htmlResult.length > mostHTMLamount) {
      mostHTMLurl = list[i];
      mostHTMLamount = htmlResult.length;
    }
  }
  console.log("Most html: " + mostHTMLurl);
  console.log("Least html: " + leastHTMLurl);

}

runProgram();
