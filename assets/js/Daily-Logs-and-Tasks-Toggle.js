var dailylogsDiv = document.getElementById('dailylogs-div');
var tasksDiv = document.getElementById('tasks-div');

var dailylogsBtn = document.getElementById('dailylogs-btn');
var tasksBtn = document.getElementById('tasks-btn');

dailylogsBtn.onclick = function() {
    tasksDiv.setAttribute('class', 'hidden'); 
    dailylogsDiv.setAttribute('class', 'visible');
    tasksBtn.setAttributes('class','inactive-btn');
    dailylogsBtn.setAttributes('class','active-btn');
};
dailylogsBtn.onclick = function() {
    
};
tasksBtn.onclick = function() {
    dailylogsDiv.setAttribute('class', 'hidden');   
    tasksDiv.setAttribute('class', 'visible'); 
    dailylogsBtn.setAttributes('class','inactive-btn');
    tasksBtn.setAttributes('class','active-btn');
};