#!/usr/bin/node
/* changes on each input checkbox tag */
$(document).ready(
function(){
list = []
$('#amenity_id').on('change', function(){
list.append(this.id)
})
}
)
