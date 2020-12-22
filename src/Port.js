import React from 'react'
import Series from "./Series";
import SeriesCars from "./SeriesCars"
import { Switch, Route } from "react-router-dom";

function Port() {
    return (
        <div className="port">
            <Switch>

                {/* 1 */}
                <Route path="/1">
            
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfyIsd10tLhu1XzWVo7puMLWFmdkAj5DOP4hO%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZ8NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVOsWh1DMztI0oeqVYDafa3mjmztYRSRHL67aftxdxbWw1RSfWQWqU%25VxdSeZsdYuzWQdjc0KX3aeZQ6KABxXRjcZwBOgMrx6Kc%252g7Q4WwBKupUI8Fe%252B3ibMPIjup2XHhDrv63iprJqYwGwXHi4TnCt9%25rJHFl5txou4TJIs8fzL3FlTv0PGdyXIslGAtnQCrv0s9OfQ6E4GA0ogSZkNF9OALUdylkIogOybQCunvLUgChZE85GybUEqcbA89ChbNmKhzPoEqhk7B1aMLNmqn12rCDyk7m5VpbYYCn178ziJhtE5V1PaHTGfN8zVMRJGdSkPazDxT%25odnMRaYWluEQ5DxRtesulZ8YWxfj0GScPteWS6AEbKMfjedwWQXBDS6jQ%25e682Ydw6Zuj3iptQ%25wc36keifZu%25KXwn1HSc3uBr%256PJdKX324uO2TQBrXpF3gmlZ24riIXUqscpF4HvrSQ0KiIFJG4dUABHvIT9hWrO2JGvloqfcgpT9GsLmdbUilo90y71AbHsLoAC1VphJ0yLOEVzwqTACygNzf1mlOECUkaQS7sgNEbnRjp10UkNh5x6zVAbnkq8WoWzOh5nmPqesagq857MmINRUmP81D7vSxb7MPVY1GWWh1DMztVlgeqVYDafz88jmztYRSao6672tr93dYgMyIf2cPr87DWLxEaVs4" h1="BMW 1 Series" button="1 Series"  />
            </Route>
      {/* 2 */}
            <Route path="/2">
                <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfjnsd10tLhu1XzWVo7puMLWFmdkAj5DOPFtpDZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztifjeqVYDafHS7jmztYRSJTN67aftxdT%25yw1RSfWQlEC%25VxdSeZsNjuzWQdjc0ka3aeZQ6KoInXRjcZwBLnmrx6Kc%252yu84WwBKupk9PFe%252B3inXVIjup2XH5rGv63iprJ8iKGwXHi4TPHA9%25rJHFlMa3ou4TJIsDpLL3FlTv0YfeyXIslGAtSECrv0s9Ofm6E4GA0ogS73NF9OALUd7SkIogOybAC7nvLUgChOU45GybUEqgmP89ChbNmU3OPoEqhk7bXHMLNmqn1hUFDyk7m5VqQ5YCn178zmZptE5V1Pa7c2fN8zVMR1LCSkPazDxVycdnMRaYWBA1Q5DxRte2oNZ8YWxfjpyKcPteWS6iHdKMfjedwHJ8BDS6jQ%25JTb2Ydw6ZuToPptQ%25wc3lLJifZu%25KXsEyHSc3uBr0UPJdKX324AblTQBrXpFOjOlZ24riIpgSscpF4HviR30KiIFJGHxyABHvIT9JWOO2JGvloTfcgpT9GsLlFFUilo90ysjbbH8oVe7C9cvwRL8kIVFHGO6AusTSz"  h1="BMW 2 Series" button="2 Series"/>                                                                                                                                            
            </Route>

            {/* 3 */}
            <Route path="/3">
                <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JZg10tLhu1XzWVo7puMLWFmdkAj5DOPiQO%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAqNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF1vWh1DMSkph5hiUVAbnkMLZACAYwhJ0yLkItJG89OABHvIL38BrENRJdKX3IjEdw925BDS6j3a9Dx4Q0dnMRajm4n1%25JHDyk7mag%25ybWB4nvLUgmlWv0PkdyXIslgpVXHNMmv63iplZh6KownXRjcZptARSFaM67aftZ8J7MrjTRUmP8tEBUkwb17sgNE89dsLx9FUilo9E4DiI14oscpF49%25nc3bkSifZu%254Wyfj0zccPteW%25VvPaHvefN8zVWhXNmKXMPoEqhVA6ogS7wNF9OAhJRFlMNmou4TJAB7upk4ZFe%252BJdUeZLGJuzWQdBDsztPDgeqVYDdniq8NnBzOh5nDycOEoNmqTACynvfT9FqCO2JGvyXP24uO2TQBrXv6NQ%25eTS2Ydw6XRoYWz2TQ5DxR67F5VqQ7YCn17RUuChOYZ5GybU7seGATwGCrv0sUizrJ2xFGwXHiscqwBvnSrx6KcifOxdXO%25w1RSfcPT1D6wVxb7MPfN2bnRxT10UkNPoQ0y71jbHsLoNFYHvUbg0KiIFou5KXs02HSc3uFeCS6iH2KMfjeuzGMRcXQSkPazeqrk7f64MLNmqzOwLUPh7kIogOqTxIsNV7L3FlTO213ioEVIjup2TQbjcF9X3aeZQ2Y0afukPjmztYQ5HmPeLeagq85YCKgNOu9mlOEC5GSloTeggpT9GCrMpF2%25%25lZ24rGwkZuQhpptQ%25wrxLteYrkZ8Xxi02jRCzgTWX%25Vi18aSOfbYM9H" h1="BMW 3 Series" button="3 Series"/>
     </Route>

            {/* 4 */}
            <Route path="/4">
                <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6Jpw10tLhu1XzWVo7puMLWFmdkAj5DOPFtprZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUXNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYV2GWh1DMztzC5eqVYDafHS6jmztYRSJTN67aftxdT%25hw1RSfWQluC%25VxdSeZsNEuzWQdjc0k13aeZQ6KoInXRjcZwBLnUrx6Kc%252yud4WwBKupC3PFe%252B3inXvIjup2XH5pcv63iprJ8i0GwXHi4TPzu9%25rJHFlMRLou4TJIsDbWL3FlTv0YhwyXIslGAt5VCrv0s9OfDJE4GA0ogSYVNF9OALU0OXkIogOybAgjnvLUgChOq85GybUEqgtE89ChbNmUfcPoEqhk7bSqMLNmqn1hd2Dyk7m5VqGhYCn178zm9MtE5V1PaZlqfN8zVMRcvySkPazDxK9QdnMRaYWB2tQ5DxRte2pkZ8YWxfjpiOcPteWS6iv2KMfjedwHG5BDS6jQ%25JL92Ydw6ZuTAnptQ%25wc3lOHifZu%25KXsxsHSc3uBrK16JdKX324BVTTQBrXpF2PflZ24riIpuuscpF4Hvia00KiIFJG18bABNIqab9FSrW1vNyXq3B4lxTjHpDm" h1="BMW 4 Series Coupe" button="4 Series" />
    </Route>
            {/* 5 */}
            <Route path="/5">  
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7t8l10tLhu1XzWVo7puMLWFmdkAj5DOPFtp8Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZ5NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVyqWh1DMztIVCeqVYDafHRAjmztYRSJdw67aftxdTlkw1RSfWQlUY%25VxdSKMlVYpeGWh1DMztio9eqVYDaf4oTjmztYRSFL167aftxdIWCw1RSfWQveU%25VxdSKMlVYXMSWh1DMztruqeqVYDafvuAjmztYRSGxO67aftxd9Agw1RSfWQoO0%25VxdSKMlVYFnWWh1DMztIupeqVYDafvePjmztYRSGTL67aftxd9%25cw1RSfWQouu%25VxdSKMlVYFXdWh1DMztIrBeqVYDafM9jjmztYRSDXz67aftxdYrfw1RSfWQt4o%25VxdSKMlVY8AaWh1DMzt%2595eqVYDafusUjmztYRS3Xo67aftxdXJuw1RSfWQrTq%25VxdSKMlVYwfdWh1DMzt%25HpeqVYDafu4AjmztYRS3Fw67aftxdRLww1pf4oXQtUDCvSpKM4P1YeyWNRz0F" h1="BMW 5 Series Sedan" button="5 Series" />
            </Route>

            {/* 6 */}
            <Route path="/6">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf7t8l10tLhu1XzWVo7puMLWFmdkAj5DOPEttKZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giALNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF1hWh1DMzticZeqVYDafHS6jmztYRSJOM67aftxdT%25Ww1RSfWQlEC%25VxdSeZsN5uzWQdjc0kT3aeZQ6KoInXRjcZwBLnWrxL67aftxdIWgw1RSfWQv4V%25Vvxb7MPVYFGHWhX10UkNh5u2OVAbnkq83VEzOh5nmPXRRagq857MruZRUmP81D5PAxb7MPVY8vWWhX10UkNh5EWkVA6bHsLoAC1wvhJR0KiIFJGbRMABHvIT9hqxO21JdKX324AEtTQbBDS6jQ%25J0p2Ydw6ZuQWWptvwsbT365emO%25v4WsxtjKqc1QSE0" h1="BMW 6 Series " button="6 Series" />
            </Route>
           
            {/* 7 */}
            <Route path="/7">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfakIl10tLhu1XzWVo7puMLWFmdkAj5DOP4Lj%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giALNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF1zWh1DMztra5eqVYDaf4RLjmztYRSG0l67aftxdTAww1RSfWQluC%25VxdSeZsNGuzWQdjc9Fk3aeZQ6KoAiXRjcZwBEvirx6Kc%252N544WwBKupk8hFe%252B3in7VIjup2XH51xv63iprJ8KKGwXHi4TPse9%25rJHFlM0oou4TJIsDAwL3FlTv0YLvyXIslGAtv9Crv0s9OfRQE4GA0ogSx8NF9OALUdW8kIogOybQ5jnvLUgmlWv0YCgyXIslGAtMbCrv0s9Ol89E4GA0ogsPVNF9OALU0MOkIogOybADQnvLUgChOrN5GybUEqYYV89ChbNmtpOPoEqhk7fSkMLNmqn1Sd5Dyk7m5Vd%25IYCn178zQuotE5V1PaZxefN8zVMRcWuSkPazDxKF0dnMRaYWBHLQ5DxRte2JcZ8YWxfjtXucPteWS6GrQKM4eJOiwWNRbsj43aJzMxQUdqfYLT" h1="BMW 7 Series Sedan" button="7 Series" />
            </Route>

            {/* 8*/}
            <Route path="/8">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfQJQi10tLhu1XzWVo7puMLWFmdkAj5DOPDjj%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAWNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYViHWh1DMztIVZeqVYDafHJEjmztYRSJwb67aftxdIQsw1RSfWQvOu%25VxdSeZGmtuzWQdjcyA83a9eqVYDafMgxjm4zOh5nmPqFaagd56reMnTNIu8dtE6Cgk1F7Gqbpw" h1="BMW Cabriolet" button="8 Series" />
            </Route>
            {/* z */}
            <Route path="/Z">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2krlROWUmgXASRCrm608Gp1oEiyU2XaMLWHNO9cvwXzZjQixUG4WsaBuCLB9ulCP5GaRhj5sgXAOHCrmMTVkHNekxFw0dXRTZGEIBQmSnLcTifGtRd%25kw8jWU9" h1="BMW Z4 Roadster" button="Z4" />
            </Route>

            {/* x */}
            <Route path="/X">
            <SeriesCars img="https://www.bmw.se/content/dam/bmw/common/all-models/i-series/i20/2020/Highlights/bmw-i-series-iX-modelcard-890x501.png" h1="BMW iX" button="iX Series" />
            </Route>

            {/* m */}
            <Route path="/M">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jD110tLhu1XzWVo7puMLWFmdkAj5DOP5tpsZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giU2NF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYF0VWh1DMztzr5eqVYDafHJ9jmztYRSaPP67aftxdRyxw1RSfWQvbm%25VxdSeZfFLuzWQdjcybj3aeZQ6KCHyXRjcZwBLv5rx6Kc%252y5b4WwBKupC3PFe%252B3in2ZIjup2XH5Azv63iprJyDKGwXHi4TCze9%25rJHFlERLou4TJIsIefL3FlTv0VeHyXIslGAzQdCrv0s9OD%25DE4GA0ogsuyNF9OALUPRXkIogOybMx8nvLUgChDS85GybUEqCrN89RbfKYmUrOpQhRVAf09gk2NHCL%25S" h1="BMW M Series" button="M Series" />
            </Route>
            {/* in */}

            <Route path="/in">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfGKDl10tLhu1XzWVo7puMLWFmdkAj5DOPHxV%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUSNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYpnaWh1DMztIi8eqVYDaf4RLjmztYRSFX767aftxd9Xgw1RSfWQoeD%25VxdSeZLdYuzWQdjcyBa3aeZQ6KdIrXRjcZwB6Jdrx6Kc%252wwN4WsKokGpc1Q8CBfJdoSWZ35uMwjhL" h1="BMW i3" button="i3 Series" />
            </Route>

            {/* recharge */}
             
            <Route path="/recharge">
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2krlROWUmgXASRCrm608Gp1oEiy6k6LMLWHNO9cvwXzZjQixUG4WsaBuCLB9ulCP5Ga2LWD3gXAjHNLcv6OgHqvZ2aKBfXRTod0Ff4hFUW7ckagd56reMnTNIu8dtE6Cgk1F7Gqbpw" h1="BMW 530e" button="530e" />
            </Route>

        
             
             {/* home */}
            <Route path="/">
   
            <SeriesCars img="https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-7331rjFhnOqIbqoKAtL3hpvYLfCny2oWYgpnQ97lX80UrO0hQAVAfS5cVLNHCLcSrxlLQAISFqIbe1KnRUQCqtUDUkUS37sgNEbnbdi10UkNh5hJlVAbnkq8cWzzOh5nmPK5Eagq857MBDxRUmP81D2Iexb7MPVYpiyWh1DMzti08eqVYDafHLojmztYRSF3y67aftxdIfcw1RSfWQv4Y%25VxdSeZLjbuzWQdjcy6X3aeZQ6KChiXRjcZwBETVrx6Kc%252NwD4WwBKupkb3Fe%252B3invvIjup2XH5Nwv63iprJ2iWGwXHi4Tplo9%25rJHFliNrou4TJIsHkUL3FlTv0J6NyXIslGAnW%25Crv0s9O589E4GA0og8PLNF9OALUPMIkIogOybMDcnvLUgChDW35GybUEqY6e89ChbNmtQrPoEqhk7NigMLNmqn1kHDDyk7m5VnbbYCn178z5JttE5V1Pa1RsfN8zVMRVvmSkPazDxzGodnMRaYWaoQQ5DxRteRIAZ8YWxfjxtacPteWS6WmDKMfjedweMiBDS6jQ%25jpP2Ydw6Zu6itptQ%25wc31v5ifZu%25KXVdPHS9uAqsr%25P61U39IjA21hoHBzcXTgHrkWS4trbH8ulamzL1hJ0Zc1lXTckZjzksQnvcPtyr%25ViExM7GqlOKvJICpYmUi5Bo0aVo70nawjmBLViuADOPJEpPGqTMJFsyZLB9trD" h1="All Models" button="All Models"  />
     </Route>
            </Switch>
        </div>
    )
}

export default Port
