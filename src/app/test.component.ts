import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'test',
    styles: [`
        .update-nag{
        display: inline-block;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        height: 40px;
        -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
        margin-bottom: 10px;
        }

        .update-nag:hover{
            cursor: pointer;
            -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.4);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.3);
        }

        .update-nag > .update-split{
        background: #337ab7;
        width: 33px;
        float: left;
        color: #fff!important;
        height: 100%;
        text-align: center;
        }

        .update-nag > .update-split > .glyphicon{
        position:relative;
        top: calc(50% - 9px)!important; /* 50% - 3/4 of icon height */
        }
        .update-nag > .update-split.update-success{
        background: #5cb85c!important;
        }

        .update-nag > .update-split.update-danger{
        background: #d9534f!important;
        }

        .update-nag > .update-split.update-info{
        background: #5bc0de!important;
        }

        .update-nag > .update-text{
        line-height: 19px;
        padding-top: 11px;
        padding-left: 45px;
        padding-right: 20px;
        }
    `],
    template: `
<div>
	<div class="row">

		<div class="col-md-12">
          <div class="update-nag">
            <div class="update-split"><i class="glyphicon glyphicon-refresh"></i></div>
            <div class="update-text">Cms v0.2.5 is available! <a href="#">Update Now</a> </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="update-nag">
            <div class="update-split update-info"><i class="glyphicon glyphicon-folder-open"></i></div>
            <div class="update-text">Plugin <a href="#">Donatirino</a> v0.2 is available! <a href="#">Update Now</a> </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="update-nag">
            <div class="update-split update-success"><i class="glyphicon glyphicon-leaf"></i></div>
            <div class="update-text">Theme <a href="#">WooStyliz</a> v1.4 is available! <a href="#">Update Now</a> </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="update-nag">
            <div class="update-split update-danger"><i class="glyphicon glyphicon-warning-sign"></i></div>
            <div class="update-text"> <strong>Warning</strong> Some type of problem, fix it! </div>
          </div>
        </div>

	</div>
</div>
    `
})
export class TestComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
