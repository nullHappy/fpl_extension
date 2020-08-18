totalPlayers2012 = 2608634;
totalPlayers2013 = 3218998;
totalPlayers2014 = 3502998;
totalPlayers2015 = 3734001;
totalPlayers2016 = 4503345;
totalPlayers2017 = 5190135;	
totalPlayers2018 = 6324237;
//final figure give as "over 7.6 million by fpl webiste"
totalPlayers2019 = 7600000;


season2012Rank = document.evaluate("//*[text() = '2012/13']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2013Rank = document.evaluate("//*[text() = '2013/14']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2014Rank = document.evaluate("//*[text() = '2014/15']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2015Rank = document.evaluate("//*[text() = '2015/16']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2016Rank = document.evaluate("//*[text() = '2016/17']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2017Rank = document.evaluate("//*[text() = '2017/18']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2018Rank = document.evaluate("//*[text() = '2018/19']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
season2019Rank = document.evaluate("//*[text() = '2019/20']/../td[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if(!(null === season2012Rank) ) { season2012Rank.innerText += " / " + totalPlayers2012 + " ---> Top: " + ((parseInt(season2012Rank.innerText) / totalPlayers2012) * 100) + "%"; }
if(!(null === season2013Rank) ) { season2013Rank.innerText += " / " + totalPlayers2013 + " ---> Top: " + ((parseInt(season2013Rank.innerText) / totalPlayers2013) * 100) + "%"; }
if(!(null === season2014Rank) ) { season2014Rank.innerText += " / " + totalPlayers2014 + " ---> Top: " + ((parseInt(season2014Rank.innerText) / totalPlayers2014) * 100) + "%"; }
if(!(null === season2015Rank) ) { season2015Rank.innerText += " / " + totalPlayers2015 + " ---> Top: " + ((parseInt(season2015Rank.innerText) / totalPlayers2015) * 100) + "%"; }
if(!(null === season2016Rank) ) { season2016Rank.innerText += " / " + totalPlayers2016 + " ---> Top: " + ((parseInt(season2016Rank.innerText) / totalPlayers2016) * 100) + "%"; }
if(!(null === season2017Rank) ) { season2017Rank.innerText += " / " + totalPlayers2017 + " ---> Top: " + ((parseInt(season2017Rank.innerText) / totalPlayers2017) * 100) + "%"; }
if(!(null === season2018Rank) ) { season2018Rank.innerText += " / " + totalPlayers2018 + " ---> Top: " + ((parseInt(season2018Rank.innerText) / totalPlayers2018) * 100) + "%"; }
if(!(null === season2019Rank) ) { season2019Rank.innerText += " / " + totalPlayers2019 + " ---> Top: " + ((parseInt(season2019Rank.innerText) / totalPlayers2019) * 100) + "%"; }
