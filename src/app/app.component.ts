import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcourse2021';

  constructor(){
const TestMap = [1,2,3,4,5,6,7].map(item => item*2);
console.log(TestMap);

const Testforeach = [1,2,3,4,5,6,7].forEach(item => item);
console.log(Testforeach);

const Testfind = [0,0,3,4,5,6,7].find(item => item === 0);
console.log(Testfind);

const Testfilter = [1,1,3,4,5,6,7].filter(item => item*0 === 0);
console.log(Testfilter);


const Testfindindex = [1,90,3,4,5,6,7].findIndex(item => item === 90);
console.log(Testfindindex);


const Testfindindexof = 'biron'.indexOf('n');
console.log(Testfindindexof);

const Testjoin = [1,90,3,4,5,6,7].join('n');
console.log(Testjoin);

const Testsplit = '1,90,3,4,2,6,7'.split(',');
console.log(Testsplit);

const Testsplice = [90,3,4,2,6,7].splice(4,2);
console.log(Testsplice);

const TestspliceA = [90,3,4,2,6,7];
console.log(Testsplice.splice(4,2));

const Testreduce = [1,90,3,4,5,6,7].reduce((acc, item) => item - acc,-84);
console.log(Testreduce);

const TestEntries = {value: 'biron', key:'RPC'};
console.log('aaa',Object.entries(TestEntries));
console.log('aaa',Object.keys(TestEntries));
console.log('aaa',Object.values(TestEntries));

const matriz1 = {}; 
  }
}
