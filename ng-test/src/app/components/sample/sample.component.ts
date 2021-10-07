import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
//import { profile } from 'console';
//import { Profiler } from 'inspector';
//import { Interface } from 'readline';

// ここにインターフェース定義
interface profile{
  name : string;
  age : number;
  lunch:boolean;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  // ※ 変数名とかはそれっぽいのをつける
  //returntext = '';

  // Q1: Angularが使用している言語は？
  // TypeScript

  // Q2: TypeScript（略:ts）が元にした言語は？（その言語を拡張して作られたのがts）
  // JavaScript

  // tsでの型定義について
  // 変数: 型; のように型を定義する。
  name: string = '初期値'; // 初期値入れないと怒られるため型定義と同時に初期化

  // Q3: 年齢を格納するnumber型の変数を定義する。初期値は0。
  age:number = 0;

  // Q4: 変数を定義するときに使用する const と let の違いは？
  // const...constは１回だけ使用可能で中身の変更は不可ということです。(再定義不可、再代入不可)
  // let...同じ変数名ではletは１回だけ使用可能(再定義不可、再代入可能)



  // 配列について
  // Q5: string型の配列を定義し、hoge, fugaを格納する。1行で記述する。
  list: string[] = ['hoge', 'fuga'];

  // オブジェクト（連想配列）について
  objectName = {
    key: 'value'
  };

  // Q6: key が name、value が '名無し'の person というオブジェクトを定義する。
  person = {
    name: '名無し',
    lunchFlag: true
  };

  // Q7: ↑で作成したオブジェクトの'名無し'を自分の名前に変更する。
  // ngOnInit内に記述


  // インターフェースについて
  // Q8: string型の name とnumber型の age が存在するインターフェース profile を定義する。
  // 定義場所はプログラム上部にあるimportと@Componentの間。  

  // Q9: インターフェース profile を使ってオブジェクトを定義する。オブジェクト名とvalueは適当に。
  MyProfile: profile = {
    name: 'Shion',
    age: 21,
    lunch:true
  };

  // Q10: インターフェース profile 型のオブジェクトが格納された配列を作成する。
  // ↓ヒント
  // 配列名: 型 = [
  //   {
  //     key: value
  //   }
  // ];
  profiles: profile[] = [
    {
      name: 'kusano',
      age: 24,
      lunch: true
    },
    {
      name: '',
      age: 0,
      lunch:true
    }
  ];
  constructor() { }

  ngOnInit(): void {
　　// Q7はここに記述
    this.person.name = '紫音';
    const abe: profile = {
      name: 'abe',
      age: 25,
      lunch: true
    };
    this.profiles.unshift(abe);

    console.log(this.profiles);
    console.log(this.profiles[1].age);
    console.log(this.formatName('くさの'));

    for (let val of this.profiles) {
      console.log(val);  
    }

    this.displayProfiles();
  }

  displayProfiles(): void{
    for (let index in this.profiles) {
      console.log(this.formatName(this.profiles[index].name));
      console.log(this.formatAge(this.profiles[index].age));
      console.log(this.profiles[index].lunch);
    }
  }

  formatAge(age: number): string{
    const returntext = age + '歳';
    return returntext;
  }

  formatName(name: string): string{
    const returntext = name + 'さん';
    return returntext;
  }
  // メソッドについて
  // Q11: 引数で受け取ったnumber型の age の後ろに 歳 をつけて返す formatAge メソッドを作成する。
  //    戻り値の型も定義すること。
  displayAge: string = this.formatAge(20); // こんな感じで使いたい
  

  

}