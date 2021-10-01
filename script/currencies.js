  var Currency = {
    rates: {"USD":1.0,"EUR":1.16959,"GBP":1.37016,"CAD":0.791816,"ARS":0.0101468,"AUD":0.72806,"BRL":0.185474,"CLP":0.00126032,"CNY":0.154834,"CYP":0.397899,"CZK":0.0460065,"DKK":0.157287,"EEK":0.0706676,"HKD":0.128489,"HUF":0.0032673,"ISK":0.00781237,"INR":0.0135487,"JMD":0.00674835,"JPY":0.00901163,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0497401,"NZD":0.700682,"NOK":0.116239,"PLN":0.254301,"SGD":0.738455,"SKK":21.5517,"SIT":175.439,"ZAR":0.0668582,"KRW":0.000848747,"SEK":0.114846,"CHF":1.08023,"TWD":0.0361281,"UYU":0.0234158,"MYR":0.23866,"BSD":1.0,"CRC":0.00159966,"RON":0.236342,"PHP":0.0195601,"AED":0.272294,"VEB":2.39651e-15,"IDR":7.0153e-05,"TRY":0.113345,"THB":0.0297726,"TTD":0.147161,"ILS":0.312344,"SYP":0.000795,"XCD":0.370041,"COP":0.000260228,"RUB":0.0137723,"HRK":0.15601,"KZT":0.0023541,"TZS":0.000432802,"XPT":985.519,"SAR":0.266667,"NIO":0.0284112,"LAK":0.000101449,"OMR":2.60078,"AMD":0.0020835,"CDF":0.000506919,"KPW":0.00111115,"SPL":6.0,"KES":0.00905495,"ZWD":0.00276319,"KHR":0.000244824,"MVR":0.0649225,"GTQ":0.129292,"BZD":0.496231,"BYR":4.01265e-05,"LYD":0.220325,"DZD":0.00729863,"BIF":0.000501459,"GIP":1.37016,"BOB":0.145,"XOF":0.00178303,"STD":4.74054e-05,"NGN":0.00243023,"PGK":0.285001,"ERN":0.0666667,"MWK":0.00122642,"CUP":0.04153,"GMD":0.0193823,"CVE":0.0106066,"BTN":0.0135487,"XAF":0.00178303,"UGX":0.000284057,"MAD":0.111012,"MNT":0.000350185,"LSL":0.0668582,"XAG":22.6295,"TOP":0.444118,"SHP":1.37016,"RSD":0.00994714,"HTG":0.0101646,"MGA":0.000252109,"MZN":0.0156659,"FKP":1.37016,"BWP":0.0897129,"HNL":0.0413765,"PYG":0.000145234,"JEP":1.37016,"EGP":0.0636571,"LBP":0.00066335,"ANG":0.558719,"WST":0.38948,"TVD":0.72806,"GYD":0.0047872,"GGP":1.37016,"NPR":0.0084284,"KMF":0.00237738,"IRR":2.37953e-05,"XPD":1968.39,"SRD":0.0466247,"TMM":5.70851e-05,"SZL":0.0668582,"MOP":0.124747,"BMD":1.0,"XPF":0.00980118,"ETB":0.0216923,"JOD":1.41044,"MDL":0.0565509,"MRO":0.00276246,"YER":0.00398684,"BAM":0.598003,"AWG":0.558659,"PEN":0.24239,"VEF":2.39651e-12,"SLL":9.45006e-05,"KYD":1.21951,"AOA":0.00164963,"TND":0.357719,"TJS":0.0882316,"SCR":0.0757868,"LKR":0.00499935,"DJF":0.00562459,"GNF":0.000102461,"VUV":0.00892061,"SDG":0.00227648,"IMP":1.37016,"GEL":0.320786,"FJD":0.477141,"DOP":0.0177309,"XDR":1.41734,"MUR":0.0235903,"MMK":0.000540777,"LRD":0.0058492,"BBD":0.5,"ZMK":5.99478e-05,"XAU":1751.12,"VND":4.41144e-05,"UAH":0.0375852,"TMT":0.285425,"IQD":0.000684946,"BGN":0.598003,"KGS":0.0117926,"RWF":0.00100432,"BHD":2.65957,"UZS":9.37617e-05,"PKR":0.00589355,"MKD":0.0190169,"AFN":0.012511,"NAD":0.0668582,"BDT":0.0117105,"AZN":0.588589,"SOS":0.00171207,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.12415,"ALL":0.00963699,"BND":0.738455,"KWD":3.32102,"GHS":0.165683,"ZMW":0.0599478,"XBT":41793.8,"NTD":0.0337206,"BYN":0.401265,"CNH":0.154791,"MRU":0.0276246,"STN":0.0474054,"VES":2.39651e-07,"MXV":0.332944},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };