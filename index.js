function checkVisible(id) {
  const isVisible = $(`#${id}`).is(":visible");
  const elem = document.getElementById(id);
  console.log(id, isVisible, `offsetWidth: ${elem.offsetWidth}, offsetHeight: ${elem.offsetHeight}, clientRects.length: ${elem.getClientRects().length}`);
}

checkVisible('main');
checkVisible('outside');
checkVisible('hello');
checkVisible('offScreen');
checkVisible('visibilityHidden');
checkVisible('width0');
checkVisible('height0');
checkVisible('size0x0');

checkVisible('displayNone');
