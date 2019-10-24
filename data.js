var events = [{
        name:'社团节',
        eventId:1
    },{
        name:'运动会',
        eventId:2
    },{
        name:'艺术节',
        eventId:3  
    }]
var photos = [{
        id:1,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:2,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:3,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:4,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:5,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:6,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:7,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:8,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:9,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:10,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    },{
        photoId:11,
        photographerId:1,
        image:'#',
        text:'test',
        year:2018,
        location:"chengdu"    
    }]
 
var clubMembers = [{
        name:'荣珧旭',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'舒靖文',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'李思颍',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'刘阳坤',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'王彦贝',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'梁雨欣',
        classes:'高一四班',
        image:'https://picsum.photos/200'
    },{
        name:'费一峻',
        classes:'高一三班',
        image:'https://picsum.photos/200'
    },{
        name:'彭嘉怡',
        classes:'高一三班',
        image:'https://picsum.photos/200'
    },{
        name:'朱佳艺',
        classes:'高一三班',
        image:'https://picsum.photos/200'
    },{
        name:'王艺涵',
        classes:'高一三班',
        image:'https://picsum.photos/200'
    },{
        name:'张桐珲',
        classes:'初三七班',
        image:'https://picsum.photos/200'
    },{
        name:'刘馨月',
        classes:'初三九班',
        image:'https://picsum.photos/200'
    },{
        name:'林宇康',
        classes:'初二一班',
        image:'https://picsum.photos/200'
    },{
        name:'陈钰竹',
        classes:'初三四班',
        image:'https://picsum.photos/200'
    },{
        name:'张海默',
        classes:'初三四班',
        image:'https://picsum.photos/200',
    }]



//<div class="card" style="width: 18rem;">
//  <img src="..." class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//</div>



var clubMembersTarget = $('#club-members')
console.log(clubMembersTarget)
for (i=0; i < clubMembers.length; i++ ) {
var clubMember = clubMembers[i]
console.log(clubMember)
var name = clubMember.name
var classes = clubMember.classes
var image = clubMember.image
var makeName = '<h5 class="card-titile">' +  name + '</h5>'
var makeClasses = '<p class="card-text">' + classes + '</p>'
var makeImage = '<img src="' + image + '" class="card-img-top" >'
var makeBody = '<div class="card-body">'+ makeImage + makeName + makeClasses +'</div>'
var makeCard = '<div class="card" >'+ makeBody +'</div>'
var makeCol = '<div class="col-md-3">'+ makeCard +'</div>' 
clubMembersTarget.append(makeCol)
}
