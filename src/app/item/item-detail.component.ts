import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';
import { LineChart } from '@nativescript-community/ui-chart/charts/LineChart';
import { LineDataSet } from '@nativescript-community/ui-chart/data/LineDataSet';
import { LineData } from '@nativescript-community/ui-chart/data/LineData';
import { Color } from '@nativescript/core';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item = this.itemService.getItem(id);

    // log the item to the console
    console.log(this.item);
  }

  onChartLoaded(args) {
    const chart = args.object as LineChart;
    chart.backgroundColor = 'white';

    // enable touch gestures
    chart.setTouchEnabled(true);

    chart.setDrawGridBackground(false);

    // enable scaling and dragging
    chart.setDragEnabled(true);
    chart.setScaleEnabled(true);
    
    // force pinch zoom along both axis
    chart.setPinchZoom(true);

    // disable dual axis (only use LEFT axis)
    chart.getAxisRight().setEnabled(false);

    const myData = new Array(50).fill(0).map((v, i) => ({
        index: i,
        value: Math.random() * 1,
    }));

    const sets = [];
    const set = new LineDataSet(myData, 'Legend Label', 'index', 'value');
    set.setColor('green');
    set.setDrawFilled(true);
    let fillColor:Color = new Color('#2cabe2');
    //fillColor = fillColor.setAlpha(128);
    set.setFillColor(fillColor);
    sets.push(set);

    // Create a data object with the data sets
    const ld = new LineData(sets);

    // Set data
    chart.setData(ld);
}
}
