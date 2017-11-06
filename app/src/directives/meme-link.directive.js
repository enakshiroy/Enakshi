const memeLinkDirective = () => {
  const createImgElement = (src, styles) => {
    const img = document.createElement("img");
    img.src = src;
    Object.assign(img.style, styles);
    return img;
  };

  const link = ($scope, element, attrs) => {
    const img = createImgElement($scope.src, { opacity: 0 });
    document.getElementById($scope.target).appendChild(img);
    $scope.show = $event => {
      img.style.opacity = 1;
    };
    $scope.hide = $event => {
      img.style.opacity = 0;
    };
  };
  return {
    link: link,
    restrict: "E",
    transclude: true,
    scope: {
      target: "@",
      src: "@"
    },
    template: `
          <a class="" href="javascript: void 0;" ng-mouseenter="show()" ng-mouseleave="hide()">
            <ng-transclude></ng-transclude>
          </a>
          `
  };
};

module.exports = {
  name: "memeLink",
  directive: [memeLinkDirective]
};
