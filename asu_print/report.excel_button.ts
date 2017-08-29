import { 
    Component, 
    OnInit 
} from '@angular/core';

import { ClickHouseService} from '../../services/ClickHouse/click-house';
import { InfoDay } from '../../services/ClickHouse/printer';

@Component({
    selector:"report",
    templateUrl:"./report.component.html",
    styles:[".item:nth-child(odd){background: #f0f0f0; }",
".item .row {margin-left: 0px;margin-right: 0px;}",
".item .row:nth-child(2n) {background-color: aliceblue;}",
".exel_but {position:absolute;margin-left: 1300px;margin-top: -90px}",
]})

export class CHReport implements OnInit{
    printers : InfoDay[];
    sn: string;
    public cellOpt: any = {
        textAlign: 'center',
        borderBottom: 'black', 
        borderRight: 'black'
    };
}