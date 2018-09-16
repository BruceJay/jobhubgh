import { Component,OnInit} from '@angular/core';
import {FormControl, Validators,FormBuilder,FormGroup} from '@angular/forms';
export interface Gender
 {
  name: string;
 }
 export interface Title
 {
  name: string;
 }

 export interface Marraige
 {
  name: string;
 }
 export interface District
 {
  name: string;
 }
 export interface Qualification{
   name: string
 }
 export  interface Disability
 {
   name: string
 }
 export interface Category{
   name : string
 }
 export interface WorkingPeriod{
   name: string
 }
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  Gendercontrol =  new FormControl('', [Validators.required]);
  genders: Gender[] =
  [
  {name: 'Male'},
  {name: 'Female'}
  ];
  Titlecontrol =  new FormControl('', [Validators.required]);
  Titles: Title[] =
  [
  {name: 'Mr'},
  {name: 'Mrs'},
  {name: 'Miss'},
  {name: 'Ms'},
  {name: 'Sir'},
  {name: 'Dr'},
  {name: 'Lady'}
  ];
  MarriageControl = new FormControl('', [Validators.required]);
  married: Marraige[]=
  [
    {name: 'Married'},
    {name: 'Widowed'},
    {name: 'Divorced or Separated'},
    {name: 'Never Married or Single'}
  ];
  DistrictControl = new FormControl('', [Validators.required]);
  disttricts: District [] =
  [
 {name: 'Accra Metropolitan District'},{name: 'Ada West District'},{name: 'Ada East District'},{name: 'Adenta Municipal District'},{name: 'Ashaiman Municipal District'},{name: 'Dangme East District'},{name: '	Ga Central Municipal District'},{name: '.	Ga East Municipal District'},{name: '.	Ga South Municipal District or Weija Municipal District'},{name: 'Ga West Municipal District'},
 {name: '	Kpone - Katamanso District'},{name: 'La Dade-Kotopon Municipal'},{name: 'La-Nkwantanang-Madina District'},{name: 'Ledzokuku-Krowor Municipal District'},{name: '	Ningo - Prampam District'},{name: '	Shai - Osudoku District'},{name: 'Tema Metropolitan District'},{name: '	Adaklu District'},{name: '	Afadzato South District (Afadjato District)'},{name: '	Agotime-Ziope District'},
 {name: 'Akatsi North District'},{name: '	Akatsi South District'},{name: 'Biakoye District'},{name: 'Central Tongu District'},{name: '	Ho Municipal District'},{name: '	Ho West District'},{name: '	Hohoe Municipal District'},{name: 'Jasikan District'},{name: 'Kadjebi District'},{name: '	Keta Municipal District'},
 {name: '	Ketu South Municipal District'},{name: '	Ketu North District'},{name: '	Kpando Municipal District'},{name: '	Krachi East District'},{name: '	Krachi-Nchumuru District'},{name: '	Krachi West District'},{name: '	Nkwanta North District'},{name: 'Nkwanta South District'},{name: '	North Dayi District'},{name: 'North Tongu District'},
 {name: 'South Dayi District'},{name: '	South Tongu District'},{name: ' Ahanta West District'},{name: 'Aowin District'},{name: 'Suaman District'},{name: ' Bia District'},{name: 'Bia East District'},{name: ' Bibiani-Anhwiaso-Bekwai District (Sefwi Bibiani-Ahwiaso-Bekwai District)'},{name: 'Bodi District'},{name: 'Ellembelle District'},
 {name: 'Jomoro District'},{name: ' Juaboso District'},{name: 'Wassa East District'},{name: 'Mpohor District'},{name: 'Nzema East Municipal District'},{name: 'Prestea-Honi Valley District'},{name: 'Sefwi-Akontombra District'},{name: 'Sefwi-Wiawso District'},{name: ' Sekondi-Takoradi Metropolitan District'},{name: 'Shama District'},
 {name: ' Tarkwa Nsuaem Municipal District'},{name: 'Wasa-Amenfi East District'},{name: ' Wasa-Amenfi Central District'},{name: 'Wasa-Amenfi West District'},{name: 'Daffiama-Bussie-Issa District'},{name: ' Jirapa District'},{name: 'Lambussie Karni District'},{name: ' Lawra District'},{name: ' Nadowli-Kaleo District'},{name: 'Nandom District'},
 {name: 'Sissala East District'},{name: 'Sissala West District'},{name: 'Wa East District'},{name: ' Wa Municipal District'},{name: 'Wa West District'},{name: '	Bawku Municipal District'},{name: '	Bawku West District'},{name: 'Binduri District'},{name: 'Bolgatanga Municipal District'},{name: 'Bongo District'},
 {name: 'Builsa North District'},{name: '	Builsa South District'},{name: 'Garu-Tempane District'},{name: '	Kassena Nankana Municipal District (Kassena Nankana East District)'},{name: '	Kassena Nankana West District'},{name: '	Nabdam District'},{name: 'Pusiga District'},{name: '	Talensi District'},{name: 'Bole District'},{name: 'Bunkpurugu - Yunyoo District'},
 {name: 'Central Gonja District'},{name: 'Chereponi District'},{name: '	East Gonja District'},{name: '	East Mamprusi District'},{name: '	Gushiegu District'},{name: 'Karaga District'},{name: 'Kpandai District'},{name: 'Kumbungu District'},{name: '	Mamprugo-Moaduri District'},{name: 'Mion District'},
 {name: '	Nanumba North District'},{name: '	Nanumba South District'},{name: '	North Gonja District'},{name: 'Saboba District'},{name: '.	Sagnerigu District'},{name: '	Savelugu-Nanton Municipal District'},{name: '	Sawla-Tuna-Kalba District'},{name: '	Tamale Metropolitan District'},{name: 'Tatale-Sangule District'},{name: 'Tolong District'},
 {name: '.	West Gonja District'},{name: '	West Mamprusi District'},{name: '	Yendi Municipal District'},{name: 'Zabzugu District'},{name: '	Akwapim North Municipal District'},{name: 'Akwapim South District'},{name: 'Akyemansa District'},{name: 'Asuogyaman District'},{name: 'Atiwa District'},{name: 'Ayensuano District'},
 {name: '	Birim Central Municipal District'},{name: 'Birim North District'},{name: '	Birim South District'},{name: '	Denkyembour District'},{name: '	East Akim Municipal District'},{name: '	Fanteakwa District'},{name: '	Kwaebibirem District'},{name: 'Kwahu Afram Plains North District'},{name: 'Kwahu Afram Plains South District'},{name: 'Kwahu East District'},
 {name: '	Kwahu South District'},{name: 'Kwahu West Municipal District'},{name: '	Lower Manya Krobo Municipal District'},{name: '	New Juaben Municipal District'},{name: '	Nsawam - Adoagyire Municipal District'},{name: 'Suhum Municipal District'},{name: '	Upper Manya Krobo District'},{name: 'Upper West Akim District'},{name: 'West Akim Municipal District'},{name: '	Yilo Krobo Municipal District'},
 {name: '	Abura - Asebu - Kwamankese District'},{name: '	Agona East District'},{name: '	Agona West Municipal District'},{name: 'Ajumako-Enyan-Essiam District'},{name: '	Asikuma - Odoben - Brakwa District'},{name: '	Assin North Municipal District'},{name: 'Assin South District'},{name: '	Awutu-Senya District'},{name: 'Awutu Senya East Municipal District'},{name: '	Cape Coast Metropolitan District'},
 {name: '	Effutu Municipal District'},{name: 'Ekumfi District'},{name: '	Gomoa East District'},{name: 'Gomoa West District'},{name: '	Komenda-Edina-Eguafo-Abrem Municipal District'},{name: '	Mfantseman Municipal District'},{name: 'Twifo Atti - Mokwa District'},{name: '	Twifo Hemang - Lower Denkyira District'},{name: '	Upper Denkyira East Municipal District'},{name: 'Upper Denkyira West District'},
 {name: 'Asunafo North Municipal District'},{name: 'Asunafo South District'},{name: 'Asutifi District'},{name: '	Asutifi South District'},{name: '	Atebubu-Amantin District'},{name: '	Banda District'},{name: '	Berekum Municipal District'},{name: '	Dormaa East District'},{name: '	Dormaa Municipal District'},{name: '	Dormaa West District'},
 {name: '	Jaman North District'},{name: 'Jaman South District'},{name: '	Kintampo North Municipal District'},{name: '	Kintampo South District'},{name: 'Nkoranza North District'},{name: '	Nkoranza South Municipal District'},{name: '	Pru District'},{name: '	Sene East District'},{name: 'Sene West District'},{name: 'Sunyani Municipal District'},
 {name: 'Sunyani West District'},{name: 'Tain District'},{name: 'Tano North District'},{name: 'Tano South District'},{name: 'echiman Municipal District'},{name: 'Techiman North District'},{name: 'Wenchi Municipal District'},{name: '.	Adansi North District (map)'},{name: 'Adansi South District'},{name: '	Afigya-Kwabre District'},
 {name: '	Ahafo-Ano North District'},{name: 'Ahafo-Ano South District'},{name: 'Amansie Central District'},{name: '	Amansie West District'},{name: '	Asante-Akim Central Municipal District'},{name: 'Asante-Akim North District'},{name: '	Asante-Akim South District'},{name: 'Asokore-Mampong Municipal District'},{name: '	Atwima-Kwanwoma District'},{name: 'Atwima-Mponua District'},
 {name: '	Atwima-Nwabiagya District'},{name: '	Bekwai Municipal District'},{name: 'Bosome-Freho District'},{name: '	Bosomtwe District'},{name: '	Ejisu-Juaben Municipal District'},{name: '	Ejura-Sekyedumase District'},{name: '	Kumasi Metropolitan District'},{name: '	Kumawu District'},{name: '	Kwabre East District'},{name: '	Mampong Municipal District'},
 {name: '	Obuasi Municipal District'},{name: '	Offinso Municipal District'},{name: 'Offinso North District'},{name: '	Sekyere-Afram Plains District'},{name: 'Sekyere Central District'},{name: '	Sekyere East District'},{name: '	Sekyere South District'}
  ];

  QualificationControl= new FormControl('', [Validators.required]);
  qualifications:Qualification[]=
  [
    {name: 'Certificate'}, {name: 'Diploma'}, {name: 'Advanced Diploma'}, {name: 'Associate Degree'},
     {name: 'Bachelor Degree'}, {name: 'Bachelor Honours Degree'}, {name: 'Graduate Certificate'}, {name: 'Graduate Diploma'},
     {name: 'Masters Degree'}, {name: 'Doctoral Degree'}, {name: 'Philosophy   Doctor (PhD) '},{name: 'Others'}, {name: 'None'}
  ];

  DisabilityControl = new FormControl('', [Validators.required]);
  disabilities:Disability []=
  [
    {name: 'Yes'},
    {name: 'No'}
  ];

  CategoryControl = new FormControl('', [Validators.required]);

  categories:Category[] =
  [
    {name: 'Self Employed '},
    {name: 'Works for a Company'}
  ];
  WorkingPeriodControl= new FormControl('', [Validators.required]);
  WorkingPeriods: WorkingPeriod[]=
  [
    {name: 'Weekdays'},
    {name: 'Weekends'},
    {name: 'Seven Days in a Week'}
  ];
}
