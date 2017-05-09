function main(){
    var width = 500;
    var height =500;

    var scene = new THREE.Scene();
    var fov = 45;
    var aspect = width/height;
    var near =1;
    var far=1000;

    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
	[-1, 1, 1], // v0
	[-1,-1, 1], // v1
	[ 1,-1, 1], // v2
	[ 1, 1, 1], // v3
	[ 1, 1,-1], // v4
	[ 1,-1,-1], // v5
	[-1,-1,-1], // v6
	[-1, 1,-1]  // v7
	];

	var faces = [
	    [0,1,2], // f0 : v0-v1-v2
	    [3,0,2], // f1 : v3-v2-v1
	    [3,2,4], // f2 : v3-v2-v4
	    [5,4,2], // f3 : v5-v2-v4
	    [0,3,4], // f4 : v0-v3-v4
	    [7,0,3], // f5 : v5-v2-v4
	    [4,5,7], // f6 : v5-v2-v4
	    [5,6,7], // f7 : v5-v2-v4
	    [1,5,2], // f8 : v5-v2-v4
	    [6,5,1], // f9 : v5-v2-v4
	    [1,0,7], // f10: v5-v2-v4
	    [1,7,2], // f11: v5-v2-v4
	    
	];
	

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
 
    var geometry = new THREE.Geometry();

    for(var i=0;i<faces.length;i++){
	var id = faces[i];
	var face = new THREE.Face3( id[0], id[1], id[2]);
	geometry.faces.push( face );
	
    }
    

    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );

    var material= new THREE.MeshBasicMaterial();
    material.vertexColors =THREE.FaceColors;
    
    geometry.faces[0].color = new THREE.Color(1,1,1);
    geometry.faces[1].color = new THREE.Color(0,0,0);
    geometry.faces[2].color = new THREE.Color(1,1,0);
    geometry.faces[3].color = new THREE.Color(0,0,1);    
    geometry.faces[4].color = new THREE.Color(1,0,1);
    geometry.faces[5].color = new THREE.Color(0,1,0);    
    geometry.faces[6].color = new THREE.Color(0,1,1);
    geometry.faces[7].color = new THREE.Color(1,0,0);
    
    material.side = THREE.DoubleSide;
    
    var tri = new THREE.Mesh( geometry, material );
    scene.add( tri );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        tri.rotation.x += 0.001;
        tri.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
