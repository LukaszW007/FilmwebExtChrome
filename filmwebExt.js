const contextMenuItem = {
    id: "search-on-Filmweb",
    title: "Search on Filmweb",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function (info) {
    console.log("info: ", info);

    if (info.menuItemId === "search-on-Filmweb") {
        const url = "https://www.filmweb.pl/search?q=" + window.getSelection();

        chrome.tabs.create({url});
    }
});
