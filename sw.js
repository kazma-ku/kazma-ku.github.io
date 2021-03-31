let name1 = 'v1';
let files = [
    './index.html',
    './index.js',
    './index.css',
    './'
];

//self means the service worker itself
self.addEventListener('install', function(event){

    caches.open(name1).
        then(function(cache){
            cache.addAll(files)
        })
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(match){
                if(match){
                    return match;
                }else{
                    console.log('to be filled')
                    fetch(event.request)
                        .then(function(response){
                            return caches.open(name1).then(function(cache){
                                cache.put(event.request, response.clone())
                                return response;
                            })
                        })
                }
            })
    );
    
    //console.log('fetch event');
    //console.log(event);
});
