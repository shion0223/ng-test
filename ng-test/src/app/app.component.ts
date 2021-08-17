import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DeleteDialogComponent} from './components/delete-dialog/delete-dialog.component'






export interface PersonInfo {
  name: string;
  birthday: string;
  age : number;
  button:string;

}

const ELEMENT_DATA: PersonInfo[] = [
  { name: 'test1', birthday: '2003-08-09',age:18 ,button:'' },
  { name: 'test2', birthday:  '2000-06-07',age: 21 ,button:''},
  { name: 'test3', birthday: '2003-08-09',age:18 ,button:'' },
  { name: 'test4', birthday:  '2000-06-07',age: 21 ,button:''},
  { name: 'test5', birthday: '2003-08-09',age:18 ,button:'' },
  { name: 'test6', birthday:  '2000-06-07',age: 21 ,button:''},
  { name: 'test7', birthday: '2003-08-09',age:18 ,button:'' },
  { name: 'test8', birthday:  '2000-06-07',age: 21 ,button:''},

];






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {
  @ViewChild(MatTable) table?: MatTable<PersonInfo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  title = 'ng-test';

  name = '';
  age = 0;
  button = '';
  dp = moment();
  events: string[] = [];

  displayedColumns: string[] = ['name', 'birthday','age','button'];

  // dataSource = ELEMENT_DATA;

  


  dataSource = new MatTableDataSource<PersonInfo>(ELEMENT_DATA);

  

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  calculateAge(type: string, event: MatDatepickerInputEvent<moment.Moment>) {
    // 下のコードはeventという変数にとってきた日付を追加している
    this.events.push(`${type}: ${event.value}`);
    // dpにとってきた日付を代入したい
    console.log(event.value);
    if (!event.value) {
      return;
    }
    const currentDate = moment();
    const birthday = moment(event.value);
    this.age = currentDate.diff(birthday, 'year');
    
    this.dp = moment(event.value);
  }

  register() {
    console.log(this.name);
    console.log(this.dp);

    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.data.push({ name: this.name, birthday: this.dp.format('YYYY-MM-DD') ,age:this.age,button:''});
    this.dataSource.paginator = this.paginator;

    this.table?.renderRows();
  }

  deleteRowData(row:number){
    console.log(this.dataSource.data[row]);

    // やること
    // 1. delete-dialog.component.htmlのclickイベントを消す（今回使わないので）完了
    // 2. [mat-dialog-close]に値を入れる canselボタン -> false, okボタン -> true　完了
    // ※元から入っているdata.animaは消してOK！　
    // 3. ↓の // 消す　の行を消す　完了
    // 4. 実行して削除ボタンをクリックしてダイアログが表示されるか確認。されなかったらメンターに苦情入れる。　完了
    // ※実行する時はターミナルでng-testディレクトリに移動(「cd ..」で一個上の階層に行ける)して「ng serve」する。
    // 5. delete-dialog.component.htmlの文言をそれっぽいのにする。「本当に削除しますか？」みたいな　完了
    // 6. dialogRef.afterClosed().subscribeの中でresultをコンソールに出力する。　完了
    // 7. 各ボタンをクリックして設定通りに出力できてるか確認。cansel -> false, ok -> true　完了
    // 8. resultがtrueの場合は行削除するようにする。if文使ってね！　完了
    // 9. 各ボタンをクリックして動作OKか確認。　完了
    //    cansel...なにもせずダイアログが閉じられる
    //    ok...ダイアログが閉じられて行が削除される
    // よろしく！！！！！！！！
  
    // ダイアログを開く
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    // ダイアログが閉じられた後の処理
    // resultの中身は[mat-dialog-close]に入れた値が返ってくる
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result == true){
        this.dataSource.data.splice(row,1);
        this.dataSource.paginator = this.paginator;
      }
    });


  }

}
