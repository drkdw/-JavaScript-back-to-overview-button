/* Check if you're previous page was on the website itself or an extern site */

var backToOverviewBtn = $j('.back-to-overview');
var oldUrl = document.referrer;

var baseUrl = 'https://hoolite.be';

//console.log('old url:' + $oldUrl);
//console.log('base url:' + $baseUrl);

if (oldUrl.includes(baseUrl)) {
    //console.log('old url contains base url.')
    backToOverviewBtn.attr("href", "javascript:window.history.back();");
} else {
    //console.log('old url is a external website for example Google.')
    backToOverviewBtn.attr("href", baseUrl + "/projects");
}