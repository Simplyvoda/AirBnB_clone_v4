#!/usr/bin/node
/* changes on each input checkbox tag */
const $ = window.$;
$(document).ready(
  function () {
    const listKeys = {};
    $("input[type='checkbox']").on('change', function () {
      if ($(this).is(':checked')) {
        listKeys[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete listKeys[$(this).attr('data-id')];
      }
      if (listKeys !== {}) {
        $('.amenities h4').text(Object.values(listKeys));
      }
    });
  }
);
