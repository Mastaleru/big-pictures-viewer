var isSinglePost = document.getElementsByClassName("single-post");
if (isSinglePost.length > 0) {
    var articles = document.getElementsByTagName("article");

    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var articleImages = article.getElementsByTagName("img");

        for (var aiIdx = 0; aiIdx < articleImages.length; aiIdx++) {
            if (articleImages[aiIdx].parentNode) {

                (function (articleImage) {

                    var parentNode = articleImages[aiIdx].parentNode;
                    var hrefAttr = parentNode.getAttribute("href");
                    var regex = /(https?:\/\/.*\.(?:png|jpg))/i;
                    if (regex.exec(hrefAttr)) {


                        var img = document.createElement("IMG");
                        img.src = hrefAttr;

                        img.onload = function () {
                            var height = this.naturalHeight;

                            if (height > window.innerHeight) {
                                parentNode.setAttribute("target", "_blank");
                                articleImage.addEventListener("click", function (event) {
                                    event.stopImmediatePropagation();
                                });
                            }
                        }

                    }

                })(articleImages[aiIdx]);

            }
        }

    }
}
