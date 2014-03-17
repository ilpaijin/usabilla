<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Demoapi</title>

    <link rel="stylesheet" href="{{url('packages/bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    
    <style>
        ul { list-style-type: none; }

        .averageIndicator {
            background: #eee;
            border:1px solid #ccc;
            height: 20px;
            width:100%;
        }

        .averageIndicator span {
            background-color: green;
            display: block;
            height: 18px;
            width: 0
        }
    </style>


    <script src="{{url('packages/bower_components/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{url('packages/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
</head>
<body>
    <div class="container">
        <h2>Demoapi</h2>

        <div class="row">
            <div class="pull-right">
                <div id="average" class="span6">
                    <h3>Average rating</h3>
                    <p>
                        <span class="averageValue">{{$average}}</span> out of {{count($data)}} records
                    </p>
                    <p class="averageIndicator"><span></span></p>
                </div>
                <div id="count" class="span6">
                    <h3>Items per rating</h3>
                    <ul>
                        @foreach($itemsPerRating as $star => $value)
                            <li>
                                n. {{$value}} : {{$star}}Star{{($star > 1) ? 's' : '' }}
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            
            
            <div class="span12 pull-left">

                @if($data)

                    <ol class="accordion" id="accordion1">

                        @foreach($data as $k => $item)

                            <li>
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne_{{$k}}">
                                            {{ $item['id'] }}
                                        </a>
                                    </div>   
                                    <div id="collapseOne_{{$k}}" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            <dl class="dl-horizontal">
                                                <dt>Browser <small>(version)</small> :</dt>
                                                <dd>
                                                    {{ $item['computed_browser']['Browser']}} 
                                                    <small>({{ $item['computed_browser']['Version'] }})</small>
                                                </dd>
                                                <dt>Platform :</dt>
                                                <dd><small>{{ $item['computed_browser']['Platform'] }}</small></dd>
                                                <dt>Geo :</dt>
                                                <dd>
                                                    <code>
                                                        <ul>
                                                            @foreach($item['geo'] as $k => $v )
                                                                <li>
                                                                    <small> <strong>{{ $k }}</strong> : {{ $v }}</small>
                                                                </li>       
                                                            @endforeach
                                                        </ul>
                                                    </code>
                                                    
                                                </dd>
                                                <dt>Rating :</dt>
                                                <dd><small>{{ $item['rating'] }}</small></dd>
                                                <dt>Labels :</dt>
                                                <dd>
                                                    <small>{{ implode(', ', $item['labels']) }}</small>
                                                </dd>
                                            </dl>    
                                            
                                        </div>
                                    </div>
                                </div>
                            </li>

                        @endforeach

                    </ol>

                @endif  

            </div>
           
        </div>
          
    </div>  

    <script>

        (function(){

            var average = {
                el: $('#average')
            };

            average.length = (average.el.width() / 5) * average.el.find('.averageValue').text();

            $('.averageIndicator span').animate({'width': average.length + 'px'}, 1500);
        })();
        

    </script>  
</body>
</html>




