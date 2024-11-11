let currentPage = 1;
const totalPages = 20;

// Function to update the progress bar
function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progress = (currentPage / totalPages) * 100;
  progressBar.style.width = progress + '%';
  progressBar.textContent = Math.round(progress) + '%';
}

// Function to show the next page
function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove('hidden');
    updateProgressBar();
  }
}

// Function to show the previous page
function prevPage() {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.remove('hidden');
    updateProgressBar();
  }
}

// Initialize progress bar
updateProgressBar();

// Handle form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  gtag('event', 'form_submission', {
    'event_category': 'Survey',
    'event_label': 'FMCG Research Questionnaire'
});

  gtag('event', 'form_response', {
    'event_category': 'Survey',
        'event_label': 'FMCG Survey',
        'age': document.querySelector('input[name="age"]:checked')?.value,
        'gender': document.querySelector('input[name="gender"]:checked')?.value,
        'income': document.querySelector('input[name="income"]:checked').value,
        'location': document.querySelector('input[name="location"]:checked').value,
        'occupation': document.querySelector('input[name="occupation"]:checked').value,
        'education': document.querySelector('input[name="education"]:checked').value,
        'marital_status': document.querySelector('input[name="marital_status"]:checked').value,
        'adRecall': document.querySelector('input[name="adRecall"]:checked').value,
        'brands': document.querySelector('textarea[name="brands"]')?.value,
        'adRecall1': document.querySelector('input[name="addRecall1"]:checked').value,
        'influence': document.querySelector('input[name="influence"]:checked').value,
        'products': document.querySelector('input[name="products"]:checked').value,
        'products1': document.querySelector('input[name="products1"]:checked').value,
        'familiar': document.querySelector('input[name="familiar"]:checked').value,
        'sources': document.querySelector('input[name="sources"]:checked').value,
        'familiarity': document.querySelector('input[name="familiarity"]:checked').value,
        'purchase_regularly' :document.querySelector('input[name="purchase_regularly"]:checked').value,
        'beverageBrandAttitude': document.querySelector('input[name="beverageBrandAttitude"]:checked').value,
        'describe' :document.querySelector('textarea[name="describe"]')?.value,
        'beverageBrand': document.querySelector('input[name="beverageBrand"]:checked').value,
        'preferredBeverageBrand' :document.querySelector('input[name="preferredBeverageBrand"]:checked').value,
        'describe_beverage': document.querySelector('textarea[name="describe_beverage"]')?.value,
        'preferredToothpasteBrand' :document.querySelector('input[name="preferredToothpasteBrand"]:checked').value,
        'describe_toothpaste': document.querySelector('textarea[name="describe_toothpaste"]')?.value,
        'preferredMilkBrand' :document.querySelector('input[name="preferredMilkBrand"]:checked').value,
        'describe_milkbrand': document.querySelector('textarea[name="describe_milkbrand"]')?.value,
        'preferredBeverageBrand1' :document.querySelector('input[name="preferredBeverageBrand1"]:checked').value,
        'preferredToothpasteBrand1' :document.querySelector('input[name="preferredToothpasteBrand1"]:checked').value,
        'purchasing_consideration' :document.querySelector('input[name="purchasing_consideration"]:checked').value,
        'purchase_timing' :document.querySelector('input[name="purchasing_timing"]:checked').value,
        'purchase_frequency' :document.querySelector('input[name="purchase_frequency"]:checked').value,
        'purchase_prevention' :document.querySelector('input[name="purchase_prevention"]')?.value,
        'ad_medium' :document.querySelector('input[name="ad_medium"]:checked').value,
        'ad_influence_frequency' :document.querySelector('input[name="ad_influence_frequency"]:checked').value,
        'ad_influence_frequency1' :document.querySelector('input[name="ad_influence_frequency1"]:checked').value,
        'beverageBrand1' :document.querySelector('input[name="beverageBrand1"]:checked').value,
        'decision_making' :document.querySelector('input[name="decision_making"]:checked').value,
        'awareness' :document.querySelector('input[name="awareness"]:checked').value,
        'social_media_engagement' :document.querySelector('input[name="social_media_engagement"]:checked').value,
        'purchase_social_media' :document.querySelector('input[name="purchase_social_media"]:checked').value,
        'digital_ads' :document.querySelector('input[name="digital_ads"]:checked').value,
        'social_media_engagement1' :document.querySelector('input[name="social_media_engagement1"]:checked').value,
        'purchase_social_media1' :document.querySelector('input[name="purchase_social_media1"]:checked').value,
        'productquality' :document.querySelector('input[name="productquality"]:checked').value,
        'brandloyality' :document.querySelector('input[name="brandloyality"]:checked').value,
        'preferredBeverageBrand2' :document.querySelector('input[name="preferredBeverageBrand2"]:checked').value,
        'television' :document.querySelector('input[name="television"]:checked').value,
        'social_media' :document.querySelector('input[name="social_media"]:checked').value,
        'online_ads' :document.querySelector('input[name="online_ads"]:checked').value,
        'radio' :document.querySelector('input[name="radio"]:checked').value,
        'cultural_relevance' :document.querySelector('input[name="cultural_relevance"]:checked').value,
        'digital_vs_traditional' :document.querySelector('input[name="digital_vs-traditional"]:checked').value,
        'memorable_factors' :document.querySelector('input[name="memorable_factors"]:checked').value,
        'recommendations' :document.querySelector('textarea[name="recommendations"]')?.value,
        'notice_ads' :document.querySelector('input[name="notice_ads"]:checked').value,
        'purchasing_channels' :document.querySelector('input[name="purchasing_channels"]:checked').value,
        'television_effectiveness' :document.querySelector('input[name="television_effectiveness"]:checked').value,
        'radio_effectiveness' :document.querySelector('input[name="radio_effectiveness"]:checked').value,
        'social_media_effectiveness' :document.querySelector('input[name="social_media_effectiveness"]:checked').value,
        'online_ads_effect' :document.querySelector('input[name="online_ads_effect"]:checked').value,
        'billboards_effectiveness' :document.querySelector('input[name="billboards_effectiveness"]:checked').value,
        'printmedia_effect' :document.querySelector('input[name="printmedia_effect"]:checked').value,
        'advertising_strategies' :document.querySelector('input[name="advertising_strategies"]:checked').value,
        'advertising_messages' :document.querySelector('input[name="advertising_messages"]:checked').value,
        'cultural_relevant_engagement' :document.querySelector('input[name="cultural_relevant_engagement"]:checked').value,
        'newproduct' :document.querySelector('input[name="newproduct"]:checked').value,
        'repeatbuyer' :document.querySelector('input[name="repeatbuyer"]:checked').value,
        'ad_leads' :document.querySelector('input[name="ad_leads"]:checked').value,
        'purchase_fmcg_products' :document.querySelector('input[name="purchase_fmcg_products"]:checked').value,
        'typesofproducts' :document.querySelector('input[name="typesofproducts"]:checked').value,
        'ads_influence' :document.querySelector('input[name="ads_influence"]:checked').value,
        'fmcgbrand' :document.querySelector('input[name="fmcgbrand"]:checked').value,
        'content_type' :document.querySelector('input[name="content_type"]:checked').value,
        'cultural_relevance1' :document.querySelector('input[name="cultural_relevance1"]:checked').value,
        'informative_ads' :document.querySelector('input[name="informative_ads"]:checked').value,
        'fmcg_ads' :document.querySelector('input[name="fmcg_ads"]:checked').value,
        'influencial_ads' :document.querySelector('input[name="influencial_ads"]:checked').value,
        'advertising_leads' :document.querySelector('input[name="advertising_leads"]:checked').value,
        'influence_purchase' :document.querySelector('input[name="influence_purchase"]:checked').value,
        'television_effectiveness1' :document.querySelector('input[name="television_effectiveness1"]:checked').value,
        'radio_effectiveness1' :document.querySelector('input[name="radio_effectiveness1"]:checked').value,
        'social_effectiveness2' :document.querySelector('input[name="social_effectiveness2"]:checked').value,
        'online_effectiveness' :document.querySelector('input[name="online_effectiveness"]:checked').value,
        'billboards_effectiveness2' :document.querySelector('input[name="billboards_effectiveness2"]:checked').value,
        'printmedia_effect2' :document.querySelector('input[name="printmedia_effect2"]:checked').value,
        'social_media_influence' :document.querySelector('input[name=social_media_influence"]:checked').value,
        'marketshares' :document.querySelector('input[name="marketshares"]:checked').value,
        'ad_strategy' :document.querySelector('input[name="ad_strategy"]:checked').value,
        'cultural_relevance_ads' :document.querySelector('input[name="cultural_relevance_ads"]:checked').value,
        'switch_brands' :document.querySelector('input[name="switch_brands"]:checked').value,
        'brandloyality1' :document.querySelector('input[name="brandloyality1"]:checked').value,
        'advertisement' :document.querySelector('textarea[name="advertisement"]')?.value,
        'online_purchase' :document.querySelector('input[name="online_purchase"]:checked').value,
        'aboutnewproducts' :document.querySelector('input[name="aboutnewproducts"]:checked').value,
        'appealing_ads' :document.querySelector('input[name="appealing_ads"]:checked').value,
        'advertising_channels' :document.querySelector('input[name="advertising_channels"]:checked').value
  });
 
 
  // Submit the form after tracking
     event.target.submit();
     setTimeout(() => {
      window.location.href = "thank-you.html"; // Redirect to a confirmation page
  }, 1000); // Optional delay to ensure Google Analytics event is sent
});