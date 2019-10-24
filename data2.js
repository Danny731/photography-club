var work =[{
    title:'社团简介',
    image:'scenery/U_67CVI]JIKR7FTK)AOY87L.jpg',
    link:'description.html'
},{
    title:'成员简介',
    image:'scenery/U)NQHT4EBT44Q$W(MYO_GH3.jpg',
    link:'clubMembers.html',
    
},{
    title:'加入我们',
    image:'scenery/@]_G}[4YOP_)`X$IMYR3SS6.jpg',
    link:'joinus.html'
},{
    title:'联系我们',
    image:'scenery/QQ图片20190926160201.jpg',
    link:'contact.html',
}]

var workTarget = $('#work')
console.log(workTarget)

//<div class="card" style="width: 18rem;">
//  <img src="..." class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//</div>

for (i=0; i < work.length; i++ ) {
    var item = work[i]
    console.log(item)
    var title = item.title
    var image = item.image
    var link = item.link
    var makeTitle = '<a href="' + link + '">' + title +  '</a>'
    var makeImage = '<img src="' + image + '" class="card-img-top" width="348" length="273" >'
    var makeBody = '<div class="card-body" >'+ makeTitle + makeImage +'</div>'
    var makeCard = '<div class="card" style="width: 18rem;>'+ makeBody +'</div>'
    var makeCol = '<div class="col-md-6">'+ makeCard +'</div>' 
    workTarget.append(makeCol)
}

